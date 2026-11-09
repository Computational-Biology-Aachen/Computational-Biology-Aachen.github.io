import * as config from "#lib/config.js";
import { absoluteUrl, news, type Article } from "#lib/site/content.js";
import { escapeXml } from "#lib/site/xml.js";
import { statSync } from "node:fs";

export const prerender = true;

const ITEMS = 20;

const imageTypes: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
};

// Fallback description: first prose paragraph, Markdown syntax stripped.
function firstParagraph(body: string): string {
  const paragraph =
    body
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .find((block) => block && !/^(#|!\[|<|\||```|[-*] )/.test(block)) ?? "";
  return paragraph
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ");
}

// RSS enclosures need the byte length, so only images shipped from static/ qualify.
function enclosure(body: string): string {
  const match = body.match(
    /!\[[^\]]*\]\((\/[^)\s]+)|<img[^>]*\ssrc="(\/[^"]+)"/,
  );
  const src = match?.[1] ?? match?.[2];
  const type = imageTypes[src?.split(".").at(-1)?.toLowerCase() ?? ""];
  if (!src || !type) return "";
  try {
    const { size } = statSync(`static${decodeURIComponent(src)}`);
    return `<enclosure url="${escapeXml(absoluteUrl(src))}" length="${size}" type="${type}"/>`;
  } catch {
    return "";
  }
}

function item(post: Article): string {
  const url = escapeXml(absoluteUrl(`/news/${post.slug}`));
  const description = post.description || firstParagraph(post.body);
  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(description)}</description>${post.author ? `\n      <dc:creator>${escapeXml(post.author)}</dc:creator>` : ""}${enclosure(post.body) ? `\n      ${enclosure(post.body)}` : ""}
    </item>`;
}

export function GET() {
  const items = news.slice(0, ITEMS);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(config.title)} - News</title>
    <link>${escapeXml(absoluteUrl("/news"))}</link>
    <description>${escapeXml(config.description)}</description>
    <language>en</language>
    <atom:link href="${escapeXml(absoluteUrl("/rss.xml"))}" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.map(item).join("\n")}
  </channel>
</rss>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml" },
  });
}
