import { ButtonHTMLAttributes } from 'react'

export default function Button(p: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className='transition-all justify-self-end p-2 rounded-full font-bold outline outline-blue-400 outline-2 -outline-offset-2 bg-gray-200 hover:bg-blue-400 hover:text-gray-100' {...p}>{p.children}</button>
  )
}
