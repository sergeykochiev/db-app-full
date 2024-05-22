import { Outlet } from 'react-router-dom'
import Tab from '../components/Tab'

export default function Main() {
    return ( <main className='p-64 px-[25%] flex gap-4'>
        <div className='flex gap-4 flex-col'>
            <Tab to="/visit">Учителя</Tab>
            <Tab to="/service">Ученики</Tab>
            <Tab to="/client">Классы</Tab>
        </div>
        <Outlet/>
    </main> )
}
