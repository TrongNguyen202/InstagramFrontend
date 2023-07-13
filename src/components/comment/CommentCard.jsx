import React, { useEffect, useState } from 'react'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { likeCommentAction, unLikeCommentAction } from '../../redux/comment/Action'
import { isCommentLikedByUser } from '../../config/Logic'
function CommentCard({comment,key}) {
  const [isCommentLike,setIsCommentLike] = useState(false)
  const {user}= useSelector(store=>store)
  const token = localStorage.getItem("token")
  const dispatch = useDispatch()
  const data={
    token:token,
    commentId:comment.id}
  const handleLikeComment=()=>{
    setIsCommentLike(true)
    dispatch(likeCommentAction(data))
  }
 const handleUnLikeComment=()=>{
  setIsCommentLike(false)
    dispatch(unLikeCommentAction(data))
 }
 
    
    
    


   

  useEffect(()=>{
    setIsCommentLike(isCommentLikedByUser(comment,user.reqUser))
    
},[comment.likedByUsers,user.reqUser])
 
  return (
    <div>
      <div className='flex justify-between py-5'>
        
          <div className='flex items-center'>
            <div>
            <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/17/19/20/bird-8000880_1280.jpg" alt="" />
            </div>
         
          <div className='ml-3' >
            <p>
              <span className='font-semibold'>{comment.user.username}</span>
              <span className='ml-2'>{comment.content}</span>
            </p>
            <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
              <span >1 min ago</span>
              <span>{comment.likedByusers.length} likes</span>
            </div>
          </div>
        </div>
        {isCommentLike===true? <AiFillHeart onClick={handleUnLikeComment} className=' hover:opacity-50 cursor:pointer text-red-600'/>: <AiOutlineHeart onClick={handleLikeComment}/>}
      </div>
      </div>
   
  )
}

export default CommentCard