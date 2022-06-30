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
    if (query) return Response.redirect(`${reqUrl}/${query}`);
    const res = await ctx.render();
    return res;
  },
};

export default function Page() {

  return (
    <div class={tw`flex flex-col items-center justify-center`}>
      <h3 class={tw("mb-4")}>Insert here your Github username</h3>
      <form method="GET">
        <input type="name" name="q" class={tw`border-2 border-slate-900 px-2 mr-4 rounded-md`} />
        <button type="submit" class={tw`bg(purple-800 hover:purple-700 focus:purple-700) rounded-md px-2 text-white`}>Find</button>
      </form>
    </div>
  );
}