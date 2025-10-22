import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ApplyJob from './pages/ApplyJob.jsx'
import Applications from './pages/Applications.jsx'   
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apply-job/:id" element={<div>ApplyJob</div>} />
        <Route path="/applications" element={<div>Applications</div>} />
      </Routes>
      
      
    </div>
  )
}

export default App
