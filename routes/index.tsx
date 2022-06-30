// Home
/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(req, ctx) {
    const url = new URL(req.url);
    const reqUrl = url.origin;
    const query = url.searchParams.get("q") || '';
    console.log(reqUrl);
    if (query) return Response.redirect(`${reqUrl}/${query}`);
    const res = await ctx.render();
    return res;
  },
};

export default function Page() {

  return (
    <div>
      <form>
        <input type="name" name="q" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}