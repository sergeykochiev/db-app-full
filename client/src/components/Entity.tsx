import React, { HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'

interface EntityProps extends HTMLAttributes<HTMLElement>{
    children: React.ReactNode
    deletePath: string
    entityPath: string
}

export default function Entity({ children, deletePath, entityPath, ...p }: EntityProps) {
    const navigate = useNavigate()
    return (
        <div className='transition-all flex justify-between items-center bg-gray-200 rounded-full group hover:bg-gray-700 cursor-pointer'>
            <div {...p} onClick={() => navigate(entityPath)} className='transition-all px-6 p-2 flex w-full items-center gap-4 group-hover:text-gray-100'>{children}</div>
            <button className='transition-all px-8 py-2 rounded-full bg-transparent hover:bg-red-500 max-w-max group-hover:text-gray-100 font-bold' onClick={async () => {
                await fetch(deletePath, { method: "DELETE" })
                navigate("./")
            }}>Удалить</button>
        </div>
    )
}
