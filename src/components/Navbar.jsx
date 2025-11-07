import React from 'react'
import menu from "../assets/menu.png"
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import notification from "../assets/notification.png"
import more from "../assets/more.png"
import upload from "../assets/upload.png"
import jack from "../assets/jack.png"

const Navbar = ({setShowSidebar}) => {
  return (
    <div className='w-full h-20 flex items-center justify-between shadow-md px-15'>
      <div className='flex gap-5'>
       {[menu,logo].map((link,i)=>(
        <img key={i} src={link} 
        className={`h-6 ${i==0? "cursor-pointer" : ""}`}
        onClick={i==0 ? ()=>setShowSidebar((prev)=>!prev) : undefined}
        />
       ))}
      </div>
      <div className='flex items-center justify-between w-[40%] border-2 border-gray-300 rounded-full px-3 py-1 '>
        <input type="text" 
        placeholder="Search" 
        className="flex-1 border-none outline-0 bg-transparent" 
        />
        <img src={search} 
        className='w-5 h-5'
        />
      </div>
      <div className='flex gap-5'>
       { [upload,more,notification].map((link,i)=>(
        <img src={link} key={i}  className='w-8 h-8' />
       ))}
        <img src={jack} className='w-8 h-8 rounded-full' />
      </div>
    </div>
  )
}

export default Navbar
