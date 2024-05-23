import { Link, LinkProps, useLocation } from 'react-router-dom'

export default function Tab(p: LinkProps) {
    const location = useLocation()
    const current = location.pathname.split("/")[1] == p.to.toString().split("/")[1]
    return (
        <label className='group'>
            <Link className='py-3 rounded-2xl px-16 bg-slate-200 font-bold grid place-items-center transition-all text-2xl outline outline-3 -outline-offset-[3px] outline-transparent text-fav group-has-[input:checked]:text-slate-200 group-has-[input:checked]:bg-fav hover:outline-fav' to={p.to}>{p.children}</Link>
            <input type='checkbox' className='hidden' readOnly checked={current}/>
        </label>
    )
}
