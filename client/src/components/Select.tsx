import { SelectHTMLAttributes, useEffect, useState } from 'react'
import { ModelUnion } from '../types'
import fetchApi from '../helpers/fetchApi'

export default function Select(p: SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <select className="transition-all w-full bg-white p-2 px-3 flex-1 rounded-xl focus:bg-fav font-bold text-slate-500 focus:text-white outline outline-2 -outline-offset-2 hover:outline-fav outline-transparent" {...p}>
            {p.children}
        </select>
    )
}

interface ForeignSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    target: string
}

export function ForeignSelect<T extends ModelUnion>(p: ForeignSelectProps) {
    const [data, setData] = useState<T[]>()
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchApi("GET", p.target)
            setData((await data.json()).results)
        }
        fetchData()
    }, [])
    return (
        <select disabled={!data || !data.length} className="transition-all w-full bg-white p-2 px-3 flex-1 rounded-xl focus:bg-fav font-bold text-slate-500 focus:text-white outline outline-2 -outline-offset-2 hover:outline-fav outline-transparent" {...p}>
            {(data && data.length) ? Object.values(data).map(e => <option value={e.id}>{e.name || e.fio}</option>) : <option selected value="" disabled>Нет данных в таблице {p.target}</option>}
        </select>
    )
}

