import { Outlet } from 'react-router-dom'
import Tab from '../components/Tab'

export default function Main() {
    return <main className='h-screen flex justify-center pt-[10%] bg-slate-800'>
        <div className='rounded-[20px] overflow-hidden flex flex-col'>
            <div className='grid grid-flow-col auto-cols-fr gap-1 bg-slate-200 p-1'>
                <Tab to="/visit/create">Посещения</Tab>
                <Tab to="/service/create">Услуги</Tab>
                <Tab to="/client/create">Клиенты</Tab>
            </div>
            <Outlet/>
        </div>
    </main>
}
