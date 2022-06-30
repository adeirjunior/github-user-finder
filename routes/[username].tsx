/* username */

/** @jsx h */

import { tw } from "@twind";
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
  results: string[];
  query: string;
}

export const handler: Handlers<User | null> = {
  async GET(req, ctx) {
    const username = ctx.params.username || "";
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const url = new URL(req.url);
    const reqUrl = url.origin;
    const query = url.searchParams.get("q") || '';
    if (query) return Response.redirect(`${reqUrl}/${query}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return (
      <div class={tw`flex flex-col items-center justify-center`}>
        <h1>User not found</h1>
        <form method="GET">
          <input type="name" name="q" class={tw`border-2 border-slate-900 px-2 mr-4 rounded-md`} />
          <button type="submit" class={tw`bg(purple-800 hover:purple-700 focus:purple-700) rounded-md px-2 text-white focus:outline-0`}>Find</button>
        </form>
      </div>
    )
  }

  return (
    <div class={tw`flex flex-col items-center justify-center`}>
      <div>
        <img src={data.avatar_url} width={64} height={64} />
        <h1>{data.name}</h1>
        <p>{data.login}</p>
      </div>
      <form method="GET">
        <input type="name" name="q" class={tw`border-2 border-slate-900 px-2 mr-4 rounded-md`} />
        <button type="submit" class={tw`bg(purple-800 hover:purple-700 focus:purple-700) rounded-md px-2 text-white focus:border-0`}>Find</button>
      </form>
    </div>
  );
}
