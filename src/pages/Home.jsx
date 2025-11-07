import React from 'react'
import Sidebar from '../components/sidebar'

const Home = ({showSidebar}) => {
  return (
    <div>
      <Sidebar showSidebar={showSidebar} />
    </div>
  )
}

export default Home
