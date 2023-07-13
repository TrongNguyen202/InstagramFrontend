import React, { useEffect, useState } from 'react'
import StoryCircle from '../../components/story/StoryCircle'
import HomeRight from '../../components/homeright/HomeRight'
import PostCard from '../../components/postcard/PostCard'
import CreatePostModal from '../../components/post/CreatePostModal'
import { useDispatch, useSelector } from 'react-redux'
import { findUserPostAction } from '../../redux/post/Action'
import { getUserProfileAction } from '../../redux/user/Action'

function HomePage() {
  const dispatch = useDispatch()
  const [userIds,setUserIds] = useState([])
  const token = localStorage.getItem("token")
  const {user, post}= useSelector(store=>store)
 useEffect(()=>{
  
  dispatch(getUserProfileAction(token))
 },[])
  useEffect(() => {
    const newIds = user.reqUser?.following?.map((user) => user.id);
    setUserIds([user.reqUser?.id,  ...(newIds || [])])
  }, [user.reqUser])
  useEffect(() => {
    const data = {
      token: token,
      userIds: [userIds].join(",")
    }
    dispatch(findUserPostAction(data))
  }, [userIds, post.createPost, post.deletePost])
  return (
    <div>
      <div className='flex mt-10 justify-center w[100%]'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
            {[1,1,1,1].map(item=> <StoryCircle/>)}
          </div>
          <div className='mt-10 space-y-10 w-full'>
            {post.userPost.length >0 && post.userPost.map((item)=> <PostCard post={item} />)}
          </div>
        </div>
        <div className='w-[27%]'>
          <HomeRight user={user.reqUser}/>
        </div>
      </div>
      
    </div>
  )
}

export default HomePage