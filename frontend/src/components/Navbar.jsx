import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'  
const Navbar = () => {
    
    const {user} = useContext(AppContext)
    const navigate= useNavigate()
  return (
    <div className='flex justify-between items-center py-4'>
        <Link to='/'>
        <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
        </Link>
    <div>
        {
            user?
            <div className='flex items-center gap-2 sm:gap-3'>
                <button onClick={() => navigate('/buycredit')} className='flex items-center gap-2 bg-blue-100 
                 px-4 py-1.5 sm:px-6 sm:py-3 rounded-full
                hover:scale-105 transition-all duration-700'>
                    <img className='w-5 sm:w-6' src={assets.credit_star} alt="" /> 
                    <p className='text-s sm:text-sm'>Credits left:5</p>
                </button>
                <p className='text-gray-600 max-sm:hidden pl-4'> Hi, User</p>
                <div className='relative group'>
                <img src={assets.profile_icon} className='w-10 
                drop-shadow' alt="" />
                <div className ='absolute hidden group-hover:block
                top-0 right-0 z-10 text-lack rounded pt-12'>
                    <ul className='list-none m-0 p-2 bg-white
                    rounded-md border text-sm shadow-lg'>
                        <li className='py-1 px-2 cursor-pointer
                        pr-10'> Logout</li>
                    </ul>
                </div>
                </div>

            </div>
            :
            <div className='flex items-center gap-3 sm:gap-5'>
             <p onClick={() => navigate('/buycredit')} className='cursor-pointer'>Pricing</p>   
             <button className='bg-black text-white 
             px-7 py-2 sm:px-9 text-sm rounded-full'>Login</button>
            </div>
        }
    </div>
    </div>
  )
}

export default Navbar