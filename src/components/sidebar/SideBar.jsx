import React, { useState } from 'react'
import {IoReorderFourSharp} from "react-icons/io5"
import { mainu } from './SideBarConfig'
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import CreatePostModal from '../post/CreatePostModal';
import SearchComponent from '../searchcomponent/SearchComponent';
import { useSelector } from 'react-redux';
const SideBar = () => {
  const [activeTab,setActiveTab] = useState("");
  const navigate = useNavigate();
  const {isOpen, onClose, onOpen}= useDisclosure()
  const [isSearchVisible, setIsSearchVisible] = useState(false)
  const{user} = useSelector(store=>store)
  console.log("req user", user.reqUser)
  const handleTabClick=(title)=> {
    setActiveTab(title)
    if(title==='Home'){
      navigate('/Home')
    }
    else if(title==='Profile'){
      navigate(`/${user.reqUser.username}`)
  }
  else if(title==='Create'){
    onOpen()
}
if(title==='Search'){
  setIsSearchVisible(true)
}
else{
  setIsSearchVisible(false)
}
 
  }
  return (
    <div className='sticky top-0 h-[100vh] flex'>
      <div className='flex flex-col justify-between h-full px-2'>
        {<div>
        {activeTab!=="Search"&& <div className='pt-10'>
          <img className='w-40' src='https://i.imgur.com/zqpwkLQ.png' alt='Trang Chu' />
        </div>}
        <div className='mt-10'>
          {mainu.map((item)=><div onClick={()=>handleTabClick(item.title)} className="flex items-center mb-5 cursor-pointer text-lg">
          <div className='text-2xl'>{ activeTab===item.title?item.activeIcon: item.icon}</div>
          {activeTab!=="Search"&& <p className={`${activeTab===item.title?'font-bold ml-5':'font-semibold ml-5'}`}> { item.title}</p>} 
           
</div> )}
          
        </div>
        </div>}
        <div className='flex items-center cursor-pointer pb-10 '>
      <div className="text-2xl">
      <IoReorderFourSharp/>
      </div>
        {activeTab!=="Search"&& <p className="ml-5 ">More</p>}
      </div>
      </div>
    <CreatePostModal onClose={onClose} onOpen={onOpen} isOpen={isOpen} />
    {isSearchVisible&& <SearchComponent/>}
    </div>
  )
}

export default SideBar