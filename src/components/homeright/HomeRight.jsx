import React from 'react'
import SuggesionCard from './SuggesionCard'

function HomeRight({user}) {
  return (
    <div className=''>
        <div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div>
                <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/28/05/34/bird-8022869_1280.jpg" alt="" />
              </div>
              <div className='ml-2'>
                <p>{user?.username}</p>
                <p className='opacity-70' >{user.username}</p>
              </div>

            </div>
           <div> <p className='text-blue-700 font-semibold cursor-pointer'>Switch</p></div>
          </div>
          <div className='space-y-5 mt-10'>
              {[1,1,1,1].map((item)=> <SuggesionCard/>)}
            </div>
        </div>
    </div>
  )
}

export default HomeRight