import { InputHTMLAttributes } from 'react'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "date" | "email" | "time"
}

export default function TextInput(p: TextInputProps) {
  return (
    <input className="transition-all p-2 px-4 rounded-full flex-1 bg-gray-200 focus:outline-gray-700 outline outline-2 outline-offset-[-1px]  outline-transparent" {...p}/>
  )
}
