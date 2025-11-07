import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Video from './pages/Video'

const App = () => {
  const [showSidebar,setShowSidebar]=useState(false);
  return (
    <div>
      <Navbar setShowSidebar={setShowSidebar} />
      <Routes>
        <Route path='/' element={<Home showSidebar={showSidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
