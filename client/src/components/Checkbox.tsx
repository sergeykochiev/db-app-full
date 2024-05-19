import { InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "radio" | "checkbox"
}

export default function Checkbox({ type = "checkbox", ...p }: CheckboxProps) {
  return (
    <label className='flex gap-2 items-center group'>
        <div className='transition-all h-5 aspect-square bg-gray-200 rounded-full outline-gray-700 outline outline-offset-[-1px] outline-2 group-has-[input:checked]:bg-gray-700'></div>
        <input type={type} className="hidden" {...p}/>
    </label>
  )
}
