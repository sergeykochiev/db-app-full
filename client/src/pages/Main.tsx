import { Outlet } from 'react-router-dom'
import Tab from '../components/Tab'

export default function Main() {
    return ( <main className='p-64 px-[25%] flex flex-col gap-4'>
        <div className='flex gap-4'>
            <Tab to="/teacher">Учителя</Tab>
            <Tab to="/student">Ученики</Tab>
            <Tab to="/class">Классы</Tab>
            <Tab to="/subject">Предметы</Tab>
            <Tab to="/studentsubject">Связь 1</Tab>
            <Tab to="/teacherclass">Связь 2</Tab>
            <Tab to="/teachersubject">Связь 3</Tab>
        </div>
        <Outlet/>
    </main> )
}
