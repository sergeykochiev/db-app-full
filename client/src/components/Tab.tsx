import React, { useState } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'

interface TabProps extends LinkProps {
}

export default function Tab(p: TabProps) {
    const location = useLocation()
    const current = location.pathname.split("/")[1] == p.to.toString().split("/")[1]
    return (
        <label className='group'>
            <Link className='transition-all text-4xl font-bold text-gray-300 group-has-[input:checked]:text-gray-700 hover:text-gray-400' to={p.to}>{p.children}</Link>
            <input type='checkbox' className='hidden' readOnly checked={current}/>
        </label>
    
  )
}
