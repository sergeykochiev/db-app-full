import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    delete?: boolean
}

export default function Button(p: ButtonProps) {
    return (
        <button className={`${p.delete ? "hover:bg-red-400" : "hover:bg-fav"} transition-all justify-self-end p-2 rounded-xl font-bold bg-white hover:text-slate-200 text-slate-500`} {...p}>{p.children}</button>
    )
}
