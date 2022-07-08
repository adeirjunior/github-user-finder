// islands/Form.tsx

/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

export default function Form() {
    return (
        <form method="GET">
            <input type="name" name="q" class={tw`border-2 border-slate-900 px-2 mr-4 rounded-md`} />
            <button type="submit" class={tw`bg(purple-800 hover:purple-700 focus:purple-700) rounded-md px-4 text-white`}>Find</button>
        </form>
    )
}