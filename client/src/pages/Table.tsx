import { ChangeEvent, useState } from 'react'
import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import Select from '../components/Select'
import { AnyTable, AnyTableKey, ModelUnion } from '../types'
import Alert from '../components/Alert'

export default function Table() {
    const [alert, setAlert] = useState<string>("")
    const [error, setError] = useState<string>("")
    const data: ModelUnion[] = useLoaderData() as ModelUnion[]
    const navigate = useNavigate()
    const path = useLocation().pathname.split("/")
    return ( <>
        <div className='rounded-b-[20px] bg-slate-200 p-6 flex flex-col gap-4'>
            <Select onChange={(e: ChangeEvent<HTMLSelectElement>) => navigate("/" + path[1] + "/" + e.target.value)} value={path[path.length - 1]}>
                <option value="create">Создать</option>
                {data.map(e => <option key={e.id} value={e.id}>{AnyTable[path[1] as AnyTableKey]} {e.id}</option>)}
            </Select>
            <Outlet context={[setAlert, setError]}/>
        </div>
        <Alert label={alert} error={false}/>
        <Alert label={error} error/>
    </> )
}
