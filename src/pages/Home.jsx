import React from 'react'
import Sidebar from '../components/sidebar'
import Feed from '../components/feed'

const Home = ({showSidebar}) => {
  return (
    <div className='flex' >
      <Sidebar showSidebar={showSidebar} />
      <Feed />
    </div>
  )
}

export default Home
