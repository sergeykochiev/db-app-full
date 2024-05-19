import { SelectHTMLAttributes, useEffect, useState } from 'react'
import entitySlugFactory from '../helpers/entitySlugFactory'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    table: "teacher" | "class" | "subject" | "student"
}

export default function Select<T extends { id: number, name: string }>(p: SelectProps) {
    const [data, setData] = useState<T[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const fetchedData = await (await fetch("/api/" + p.table + "/")).json()
            setData(fetchedData.results)
        }
        fetchData()
    }, [p])
  return (
    <select className="transition-all p-2 px-4 flex-1 rounded-full bg-gray-200 focus:outline-gray-700 outline outline-2 outline-offset-[-1px]  outline-transparent" {...p}>
        {data.length > 0 ? data.map(e => <option selected value={e.id}>{entitySlugFactory(e)}</option>) : <option selected disabled value="">Нет записей в таблице {p.table}</option>}
    </select>
  )
}
