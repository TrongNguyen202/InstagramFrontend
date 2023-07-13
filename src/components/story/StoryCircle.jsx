import React from 'react'
import { useNavigate } from 'react-router-dom'

function StoryCircle() {
  const navigate = useNavigate()

  const handleNavigate=()=>{
       navigate("/story")
  }
  return (
    <div onClick={handleNavigate} className='flex flex-col items-center cursor-pointer' > 
        <img className='w-16 h-16 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/24/05/06/dog-8014047_1280.jpg" alt="" />
        <p>username</p>
    </div>
  )
}

export default StoryCircle