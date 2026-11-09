import { absoluteUrl } from "#lib/site/content.js";

export const prerender = true;

// RFC 9116. Expires is a year past the build; the weekly bot PRs keep it fresh.
const reportUrl =
  "https://github.com/Computational-Biology-Aachen/Computational-Biology-Aachen.github.io/security/advisories/new";

export function GET() {
  const expires = new Date();
  expires.setUTCFullYear(expires.getUTCFullYear() + 1);
  const body = `Contact: ${reportUrl}
Expires: ${expires.toISOString().replace(/\.\d{3}Z$/, "Z")}
Preferred-Languages: en, de
Canonical: ${absoluteUrl("/.well-known/security.txt")}
Policy: https://github.com/Computational-Biology-Aachen/Computational-Biology-Aachen.github.io/blob/main/SECURITY.md
`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
