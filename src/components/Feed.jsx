import React from 'react'
import thumbnail1 from "../assets/thumbnail1.png"
import thumbnail2 from "../assets/thumbnail2.png"
import thumbnail3 from "../assets/thumbnail3.png"
import thumbnail4 from "../assets/thumbnail4.png"
import thumbnail5 from "../assets/thumbnail5.png"
import thumbnail6 from "../assets/thumbnail6.png"
import thumbnail7 from "../assets/thumbnail7.png"
import thumbnail8 from "../assets/thumbnail8.png"
import {Link} from "react-router-dom"

const Feed = () => {
  return (
    <div className='w-full grid lg:grid-cols-3 md:grid-cols-4 mt-1.5 ml-5 
    bg-[#f9f9f9] p-5 gap-3'>
      {[thumbnail1,thumbnail2,thumbnail3,thumbnail4,thumbnail5,thumbnail6,thumbnail7,thumbnail8].map((link)=>(
        <Link to={`video/20/4521` } >
          <img src={link}  className='w-full rounded-2xl' />
          <h2 className='text-[16px] text-[#000] mx-5 my-0 font-semibold ' >Best channel to learn coding</h2>
          <h3 className='text-[13px] text-[#555] mx-6 my-0 font-semibold ' >Greatstack</h3>
          <p className='text-[14px] mx-5 my-0' >15k views &bull; 2 days ago</p>
        </Link>
      ))}
    </div>
  )
 }

export default Feed
