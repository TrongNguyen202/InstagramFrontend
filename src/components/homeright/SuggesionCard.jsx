import React from 'react'

function SuggesionCard() {
  return (
    <div className='flex items-center justify-between'>
        <div className='flex items-center'>
            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/30/16/50/milk-8029140_1280.png" alt="" />
            <div className='ml-2'>
                <p className='text-sm font-semibold' > username</p>
                <p className='text-sm font-semibold opacity-70' > follows you </p>

            </div>
        </div>
        <p className='text-blue-700 text-sm font-semibold cursor-pointer'>follow</p>
    </div>
  )
}

export default SuggesionCard