// Home
/** @jsx h */
import { tw } from "@twind";
import { h } from "preact";
import { Handlers } from "$fresh/server.ts";
import Form from '../islands/Form.tsx';

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
    <div class={tw`flex flex-col items-center justify-center pt-20`}>
      <h3 class={tw("mb-4")}>Insert here your Github username</h3>
      <Form />
    </div>
  );
}