import { absoluteUrl } from "#lib/site/content.js";

export const prerender = true;

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
