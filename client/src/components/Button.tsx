import { ButtonHTMLAttributes } from 'react'

export default function Button(p: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className='transition-all justify-self-end p-2 rounded-full font-bold bg-gray-200 hover:bg-gray-700 hover:text-gray-100' {...p}>{p.children}</button>
  )
}
