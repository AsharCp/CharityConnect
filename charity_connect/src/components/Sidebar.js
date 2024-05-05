import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='relative h-screen w-52 bg-slate-100 lg:hidden'>
        <ul className='p-2 font-semibold tracking-wider'>
            <Link to='/'><li className='p-3 hover:text-lg'>Home</li></Link>
            <Link to='donate'><li className='p-3 hover:text-lg'>Donate</li></Link>
            <Link to='events'><li className='p-3 hover:text-lg'>Events</li></Link>
            <Link to='history'><li className='p-3 hover:text-lg'>History</li></Link>
        </ul>
    </div>
  )
}

export default Sidebar