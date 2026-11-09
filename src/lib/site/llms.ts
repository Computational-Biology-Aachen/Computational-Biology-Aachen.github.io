// llms.txt (https://llmstxt.org) index and its llms-full.txt expansion. Both
// share one outline; `full` inlines the Markdown bodies instead of linking.
// Emails are deliberately left out (only the group leader's, as contact).
import * as config from "#lib/config.js";
import {
  absoluteUrl,
  alumni,
  groupLeader,
  isWeeklySummary,
  news,
  publications,
  team,
  tutorials,
  type Article,
  type Person,
} from "./content.js";
import { events, mission, software, teaching } from "./summaries.js";

const RECENT_NEWS = 10;

// Demote a body's headings so they nest under the entry's own "###" heading.
function nest(body: string): string {
  return body.replace(/^(#{1,4}) /gm, "###$1 ");
}

function profileLinks(person: Person): string {
  const links = [
    person.orcid && `[ORCID](${person.orcid})`,
    person.github && `[GitHub](${person.github})`,
    person.gitlab && `[GitLab](${person.gitlab})`,
    person.website && `[website](${person.website})`,
  ].filter(Boolean);
  return links.length ? ` (${links.join(", ")})` : "";
}

function personEntry(person: Person, full: boolean): string {
  const url = absoluteUrl(`/team/${person.slug}`);
  if (!full) return `- [${person.name}](${url})${profileLinks(person)}`;
  return `### [${person.name}](${url})${profileLinks(person)}\n\n${nest(person.body)}`;
}

function articleEntry(
  article: Article,
  section: string,
  full: boolean,
): string {
  const url = absoluteUrl(`/${section}/${article.slug}`);
  const meta = [article.date, article.author].filter(Boolean).join(", ");
  if (!full) {
    const description = article.description ? `: ${article.description}` : "";
    return `- [${article.title}](${url}) (${meta})${description}`;
  }
  return `### [${article.title}](${url})\n\n_${meta}_\n\n${nest(article.body)}`;
}

function publicationEntry(publication: (typeof publications)[number]): string {
  const preprint = publication.preprint ? " (preprint)" : "";
  return `- [${publication.title}](${publication.doi}) - ${publication.authors.join(", ")}, ${publication.date}${preprint}`;
}

function section(title: string, entries: string[], full: boolean): string {
  return `## ${title}\n\n${entries.join(full ? "\n\n" : "\n")}`;
}

export function renderLlms(full: boolean): string {
  const contact = groupLeader?.mail
    ? `Contact: ${groupLeader.name}, ${groupLeader.mail}.`
    : "";
  const recentNews = full
    ? news
    : news.filter((post) => !isWeeklySummary(post)).slice(0, RECENT_NEWS);

  const parts = [
    `# ${config.title}`,
    `> ${config.description}. Mechanistic and data-driven models of photosynthesis, open-source modelling software (MxlPy and friends) and teaching. Website: ${absoluteUrl("/")}`,
    [mission, contact].filter(Boolean).join("\n\n"),
    full
      ? ""
      : `The complete content of this site (team bios, tutorials, all news) is in [llms-full.txt](${absoluteUrl("/llms-full.txt")}).`,
    section(
      "Team",
      [
        ...team.map((person) => personEntry(person, full)),
        `Alumni: ${alumni.map((person) => person.name).join(", ")}.`,
      ],
      full,
    ),
    section("Publications", publications.map(publicationEntry), false),
    section(
      "Tutorials",
      tutorials.map((tutorial) => articleEntry(tutorial, "tutorials", full)),
      full,
    ),
    section(
      "Software and resources",
      software.map((s) => `- [${s.title}](${s.url}): ${s.description}`),
      false,
    ),
    `## Teaching\n\n${teaching} Details: ${absoluteUrl("/teaching")}`,
    section(
      "Events",
      events.map((e) => `- [${e.title}](${e.url}): ${e.description}`),
      false,
    ),
    section(
      full ? "News" : "Optional",
      recentNews.map((post) => articleEntry(post, "news", full)),
      full,
    ),
  ];

  return `${parts.filter(Boolean).join("\n\n")}\n`;
}
