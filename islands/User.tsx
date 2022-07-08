// islands/User.tsx

/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { UserProp } from '../types/interfaces.ts';

export default function User({ data, H1 }: UserProp) {
    const H1Clone = () => h(H1.type, { class : H1.props.class }, H1.props.children)
    return (
        <div class={tw`flex flex-col items-center justify-center my-10`}>
            <div class={tw`rounded-full mb-4 overflow-hidden border(black 2)`}>
                <img src={data.avatar_url} width={256} height={256} />
            </div>
            <H1Clone />
            <p class={tw`text(xl)`}>{data.login}</p>
        </div>
    )
}