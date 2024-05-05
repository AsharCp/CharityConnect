import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenuLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx"
import Sidebar from './Sidebar';

const Navbar = () => {

  const [showSidebar,setShowSidebar] = useState(false);

  const handleSidebarOn=()=>{
    setShowSidebar(true)
  }
  const handleSidebarClose=()=>{
    setShowSidebar(false)
  }

  
  return (
    <>
    <nav className='bg-white flex flex-row items-center justify-between p-1 border border-solid
     sm:bg-yellow-100
     md:bg-yellow-600
      lg:bg-green-500
       xl:bg-white'>
        <div className='flex flex-row justify-center items-center'>
          <img className='m-2 rounded hidden lg:block lg:visible' style={{width:'50px',height:'50px'}} src="/CharityConnect.jpg" alt='Logo'/>
          {showSidebar?
          <button onClick={handleSidebarClose}><RxCross1 className='sm:visible lg:hidden w-6 mt-3 mx-3 h-6 rounded hover:bg-gray-200'  /></button>
          :<button onClick={handleSidebarOn}><RiMenuLine className='sm:visible lg:hidden w-6 mt-3 mx-3 h-6 rounded hover:bg-gray-200'  /></button>
          }
          
          
          
          <p className='text-3xl pt-2 font-bold text-blue-color hover:text-green-700 lg:px-2'>CharityConnect</p>
        </div>
        
        <ul className='invisible flex flex-row justify-end gap-10 mx-10 text-black font-semibold pt-2 text-md lg:visible'>
            <Link to='/'><li className='bg-white px-5 py-1 rounded hover:text-white hover:bg-blue-color'>Home</li></Link>
            <Link to='donate'><li className='bg-white px-5 py-1 rounded hover:text-white hover:bg-blue-color'>Doante</li></Link>
            <Link to='events'><li className='bg-white px-5 py-1 rounded hover:text-white hover:bg-blue-color'>Events</li></Link>
            <Link to='history'><li className='bg-white px-5 py-1 rounded hover:text-white hover:bg-blue-color'>History</li></Link>
        </ul>
    </nav>
    {showSidebar?<Sidebar/>:""}
    
    </>
    
  )
}

export default Navbar