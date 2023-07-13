import React, { useEffect, useState } from 'react'
import './SearchComponent.css'
import SearchUserCard from './SearchUserCard'
import { useDispatch, useSelector } from 'react-redux'
import { findUserByUsernameAction } from '../../redux/user/Action'
const SearchComponent = () => {
  const [input,setInput] = useState("")
  const dispatch = useDispatch()
  const token = localStorage.getItem("token")
  const {user} = useSelector(store=>store)
const handleFindUserByUsername=(value)=>{
setInput(value)
console.log("input search",input)

}
useEffect(()=>{
  const data={
    token:token,
    username: input
  }
dispatch(findUserByUsernameAction(data))
},[input])

  return (
    <div className='searchContainer'>
        <div className=' flex item-center flex-col '>
            <h1 className='text-blue-500 text-xl py-5' >Search</h1>
            <input onKeyDown={(e) => {
  if (e.key === 'Enter') {
    handleFindUserByUsername(e.target.value)
  }
}} className='searchInput' type="text"  placeholder='search...'/>
        </div>
        <hr />
        <div className='px-3 pt-5'> 
            <SearchUserCard userFind={user.findByUsername} />
        </div>
    </div>
  )
}

export default SearchComponent