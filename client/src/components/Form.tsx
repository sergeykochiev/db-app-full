import { FormHTMLAttributes } from 'react'

export default function Form(p: FormHTMLAttributes<HTMLFormElement>) {
    return (
        <form className='flex flex-col gap-4' {...p}/>
    )
}
