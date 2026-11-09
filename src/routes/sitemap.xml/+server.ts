import { absoluteUrl, sitePages } from "#lib/site/content.js";
import { escapeXml } from "#lib/site/xml.js";

export const prerender = true;

export function GET() {
  const urls = sitePages()
    .map(({ path, lastmod }) => {
      const loc = `<loc>${escapeXml(absoluteUrl(path))}</loc>`;
      return `  <url>${loc}${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;
    })
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
