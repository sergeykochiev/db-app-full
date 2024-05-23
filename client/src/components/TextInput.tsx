import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "date" | "email" | "time" | "tel"
}

export default function TextInput(p: TextInputProps) {
    return (
        <input className="transition-all p-2 px-4 rounded-xl flex-1 bg-white focus:bg-fav text-slate-500 font-bold placeholder:font-normal focus:text-white placeholder:focus:text-slate-200 placeholder:text-slate-400 outline outline-2 -outline-offset-2 hover:outline-fav outline-transparent" {...p}/>
    )
}
