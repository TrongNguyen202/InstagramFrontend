import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import { Routes, Route, useLocation } from 'react-router-dom'
import HomePage from '../homepage/HomePage'
import Profile from '../profile/Profile'
import Story from '../story/Story'
import Auth from '../auth/Auth'
import { useSelector } from 'react-redux'
function Router() {
  const location = useLocation();
  const{user} = useSelector(store=>store)
  return (
    <div>

        { (location.pathname!=="/login" &&location.pathname!=="/signup")?( <div className="flex">
<div className="w-[20%] border border-l-slate-500">
    <SideBar/>
</div>
<div className='w-full'>
    <Routes>
        <Route path='/Home' element={<HomePage/>} > </Route>
        <Route path={`/${user.reqUser.username}`} element={<Profile/>} > </Route>
        <Route path='/story' element={<Story/>} > </Route>
        <Route path='/comment/:postId' element={<HomePage/>} > </Route>
    </Routes>
</div>


        </div>):(
        <div>
          <Routes>
        <Route path='/signup' element={<Auth/>} > </Route>
        <Route path='/login' element={<Auth/>} > </Route>
        </Routes>
        </div>)} 
    </div>
  )
}

export default Router