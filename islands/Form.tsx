// islands/Form.tsx

/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

export default function Form() {
    return (
        <form method="GET">
            <input type="name" name="q" class={tw`border-2 border-slate-900 px-2 mr-4 rounded-md`} />
            <button type="submit" class={tw`bg(black hover:gray-700 focus:gray-700) rounded-md px-4 text-white`}>Find</button>
        </form>
    )
}