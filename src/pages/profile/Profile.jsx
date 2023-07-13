import React from 'react'
import ProfileUserDetail from '../../components/profileComponent/ProfileUserDetail'
import ReqUserPostPart from '../../components/profileComponent/ReqUserPostPart'
import { useSelector } from 'react-redux'
function Profile() {
  const {user,post} = useSelector(store=>store)
  return (
    <div className='px-20'>
        <div>
            <ProfileUserDetail user={user.reqUser} post={post}/>
        </div>
        <div>
            <ReqUserPostPart post={post} user={user.reqUser} />
        </div>
    </div>
  )
}

export default Profile