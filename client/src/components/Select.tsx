import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
}

export default function Select(p: SelectProps) {
    return (
        <select className="transition-all p-2 px-4 flex-1 rounded-full bg-gray-200 focus:outline-gray-700 outline outline-2 outline-offset-[-1px]  outline-transparent" {...p}>
            
            {p.children}
        </select>
    )
}
