/* username */

/** @jsx h */

import { tw } from "@twind";
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import Form from '../islands/Form.tsx';
import { User as UserProp } from '../types/interfaces.ts';
import User from '../islands/User.tsx';

export const handler: Handlers<UserProp | null> = {
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
    const user: UserProp = await resp.json();
    return ctx.render(user);
  },
};
export default function Page({ data }: PageProps<UserProp | null>) {
  const H1 = () => h(
    'h1',
    { class: `${tw`text( 4xl )`}` }, 
    `${data?.name ?? 'User not found'}`
  );
 
  if (!data) {
    return (
      <div class={tw`flex flex-col items-center justify-center`}>
        <H1 />
        <Form />
      </div>
    )
  }

  return (
    <div class={tw`flex flex-col items-center justify-center`}>
      <User data={data} H1={H1()}/>
      <Form />
    </div>
  );
}
