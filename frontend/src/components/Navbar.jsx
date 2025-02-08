import React from 'react'
import { Link } from 'react-router-dom'
import { LogOut, Settings, User } from 'lucide-react'
import { useAuthStore } from '../store/useAuthStore'

function Navbar() {
  const { logout, authUser } = useAuthStore()
  return (
    <header className='fixed w-full z-40 top-0 h-10 bg-white/10 rounded-b-md text-white flex justify-around items-center'>
      <div>Maaz Shakeel</div>

    <div className='flex items-center gap-5'>
        {/* Setting  */}
        <div className='flex items-center gap-2'>
        <Link to={'/setting'} className='btn btn-sm gap-2 transition-colors'>
          <Settings className='w-4 h-4' />
          <span className='hidden sm:inline'>Setting</span>
        </Link>
      </div>

      {/* Profile  */}
      {authUser && (
        <>
          <Link to={'/profile'} className='btn btn-sm gap-2 transition-colors'>
            <User className='size-5' />
            <span className='hidden sm:inline'>Profile</span>
          </Link>

          {/* Logout  */}
          <button onClick={logout} className='flex gap-2 items-center'>
            <LogOut className='size-5' />
            <span className='hidden sm:inline'>Logout</span>
          </button>
        </>
      )}
    </div>
    </header>
  )
}

export default Navbar
