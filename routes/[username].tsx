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
  async GET(_, ctx) {
    console.log(ctx.params);
    const username = ctx.params.username|| "";
    const resp = await fetch(`https://api.github.com/users/${username}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <img src={data.avatar_url} width={64} height={64} />
      <h1>{data.name}</h1>
      <p>{data.login}</p>
      <form>
        <input type="name" name="q" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
