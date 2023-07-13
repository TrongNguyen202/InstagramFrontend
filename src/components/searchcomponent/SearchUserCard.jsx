import React from 'react'

const SearchUserCard = ({userFind}) => {
  return (
    <div className='py-2 cursor-pointer'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full' src={userFind?.image}alt="" />
        <div className='ml-3'>
            <p>{userFind?.name}</p>
            <p className='opacity-70' >{userFind?.username}</p>
        </div>
        </div>
        
    </div>
  )
}

export default SearchUserCard