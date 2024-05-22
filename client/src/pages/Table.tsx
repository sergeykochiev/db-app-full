import { ChangeEvent, useEffect, useState } from 'react'
import fetchApi from '../helpers/fetchApi'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Select from '../components/Select'
import { AnyTable, AnyTableKey, ModelUnion } from '../types'

export default function Table() {
    const [data, setData] = useState<ModelUnion[]>([])
    const navigate = useNavigate()
    const pathname = useLocation().pathname.split("/")[1] as AnyTableKey
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchApi("GET", "client")
            setData(data.results)
        }
        fetchData()
    }, [])
    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (Number(e.target.value) === -1) {
            navigate("/client/create")
        }
        navigate("/client/" + e.target.value)
    }
    return (
        <div className='rounded-4 bg-gray-200 p-6'>
            <Select onChange={changeHandler}>
                <option selected value="-1">Создать</option>
                {data.map(e => <option selected value={e.id}>{AnyTable[pathname]} {e.id}</option>)}
            </Select>
            <Outlet/>
        </div>
    )
}
