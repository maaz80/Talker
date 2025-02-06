import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      Just checking github
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  )
}

export default App
