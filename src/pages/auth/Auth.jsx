import React from 'react'
import "./Auth.css"
import Signin from '../../components/rester/Signin'
import { useLocation } from 'react-router-dom'
import Signup from '../../components/rester/Signup'


const Auth = () => {
    const location = useLocation()
  return (
    <div>
        <div className='flex items-center justify-center h-[100vh] w-full space-x-5'>
            <div className='relative hidden lg:block '>
                <div className='h-[35.3rem] w-[23rem] ' >
                    <img className='h-full w-full' src="https://res.cloudinary.com/dnbw04gbs/image/upload/v1679494375/home-phones-2x-edited_glksxn.png" alt="" />
                    <div className='mobilewallpaper h-[33rem] w-[15.7rem] absolute top-3 right-3' >

                    </div>
                </div>
            </div>
            <div className='border w-[25vw]'>
               {location.pathname==="/login" ?<Signin/>:<Signup/>}
            </div>
        </div>
    </div>
  )
}

export default Auth