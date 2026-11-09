import { renderLlms } from "#lib/site/llms.js";

export const prerender = true;

export function GET() {
  return new Response(renderLlms(true), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
