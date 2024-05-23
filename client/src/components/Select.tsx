import { SelectHTMLAttributes } from 'react'

export default function Select(p: SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <select className="transition-all w-full bg-white p-2 px-3 flex-1 rounded-xl focus:bg-fav font-bold text-slate-500 focus:text-white outline outline-2 -outline-offset-2 hover:outline-fav outline-transparent" {...p}>
            {p.children}
        </select>
    )
}
