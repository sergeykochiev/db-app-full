import { Outlet, useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import Entity from '../components/Entity'
import Button from '../components/Button'
import entitySlugFactory from '../helpers/entitySlugFactory'

export default function List<T extends { id: number }>() {
    const data: T[] = useLoaderData() as T[]
    const location = useLocation()
    const target = location.pathname.split("/")[1]
    const navigate = useNavigate()
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='flex gap-4 flex-col'>
                <Button onClick={() => navigate("/" + target + "/create")}>Создать</Button>
                {data.length > 0 ? data.map(e => <Entity deletePath={"/api/" + target + "/" + e.id + "/"} entityPath={String(e.id)}>
                    {entitySlugFactory(e)}
                </Entity>) : <div className='p-2 flex-1 flex items-start justify-center'>Нет записей</div>}
            </div>
            <Outlet/>
        </div>
        
    )
}
