import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Setting from './pages/Setting'
import Profile from './pages/Profile'
import Login from './pages/Login'
import { useAuthStore } from './store/useAuthStore'
import { Loader } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log(authUser);

  if (isCheckingAuth && !authUser) return <div className=' flex justify-center items-center h-screen w-full '>
    <Loader className='size-10 animate-spin' />
  </div>
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Login />} />
        <Route path='/signup' element={!authUser ? <Signup /> : <Home />} />
        <Route path='/login' element={!authUser ? <Login /> : <Home />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/profile' element={authUser ? <Profile /> : <Login />} />
      </Routes>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  )
}

export default App
