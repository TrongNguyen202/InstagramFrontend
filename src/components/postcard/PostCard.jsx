import React, { useEffect, useState } from 'react'
import {BsBookmarkFill, BsThreeDots,BsBookmark, BsEmojiSmile} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {RiSendPlaneLine} from 'react-icons/ri'
import './PostCard.css'
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import CommentModal from '../comment/CommentModal'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePostAction, likePostAction, savePostAction, unLikePostAction, unSavePostAction } from '../../redux/post/Action'
import { isPostLikeByUser, isSavePostByUser } from '../../config/Logic'
import { useNavigate } from 'react-router-dom'
function PostCard({post}) {
    const [showDropDown,setShowDropDown] = useState(false)
    const [isPostLiked,setisPostLiked] = useState(false)
    const [isSave,setIsSave] = useState(false)
    const {isOpen, onOpen,onClose} = useDisclosure()
    const token = localStorage.getItem("token")
    const data={token:token,postId:post?.id}
    const {user}= useSelector(store=>store)
    const navigate = useNavigate()
  const dispatch= useDispatch()
    const handlePostLike=()=>{
          setisPostLiked(true)
          dispatch(likePostAction(data))
    }
    const handlePostUnLike=()=>{
        setisPostLiked(false)
        dispatch(unLikePostAction(data))
  }
    const handleIsSave=()=>{
        setIsSave(true)
        dispatch(savePostAction(data))
    }
    const handleUnSavePost=()=>{
        setIsSave(false)
        dispatch(unSavePostAction(data))
    }
    const handleShowDropDown=()=>{
        setShowDropDown(!showDropDown)
    }
    const handleOpenCommentModal=()=>{
        
        navigate(`/comment/${post.id}`);
        onOpen();
    };


    useEffect(()=>{
        setisPostLiked(isPostLikeByUser(post,user.reqUser))
        setIsSave(isSavePostByUser(user.reqUser,post.id))
    },[post.likedByUsers,user.reqUser])

    const handleDeletePost=()=>{
        dispatch(deletePostAction(data))
    }
  return (
    <div>
        <div className='border rounded-md w-full'>
            <div className='flex justify-between w-full py-10 px-5 rounded-md'>
                <div className='flex items-center'>
                    <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/03/26/19/57/mountain-7879029_1280.jpg" alt="" />
                <div className='pl-2' > 
                    <p className='font-semibold text-sm'>{post.user.username}</p>
                    <p className='font-thin text-sm'>{post.location}</p>
                </div>
                </div>
                <div className='dropdown'>
                    <BsThreeDots className='dots' onClick={handleShowDropDown} />
                    <div className='dropdown-content'>
                       {showDropDown&& <p onClick={handleDeletePost} className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'> Delete </p>}
                    </div>
                </div>

            </div>
            <div className='w-full' >
                <img className='w-full' src={post.image}alt="" />
            </div>
            <div className='flex justify-between items-center w-full px-5 py-4 '> 
            <div className='flex items-center space-x-5'>
                {isPostLiked?<AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-500' onClick={handlePostUnLike}/>:<AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer'  onClick={handlePostLike} />}
                <FaRegComment onClick={handleOpenCommentModal} className='text-xl hover:opacity-50 cursor-pointer'/>
                <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
            </div>
            <div className='cursor-pointer'>
                {isSave? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleUnSavePost} />:
                <BsBookmark className='text-xl hover:opacity-50 cursor:pointer' onClick={handleIsSave}/>}
               
            </div>
            </div>
            <div className='w-full px-5 py-2'>
               {post?.likedByUsers?.length>0&&<p>{post?.likedByUsers?.length} Likes</p>}
              {post.comments?.length>0&& <p onClick={()=>onOpen()} className='opacity-50 py-2 cursor-pointer' >view all {post.comments?.length} comments</p>}
            </div>
            <div>
                <div className='flex w-full items-center border border-t'>
                    <BsEmojiSmile className='text-2xl cursor-pointer'/>
                    <input className='commentInput w-full' type="text" placeholder='add a comment...' />
                </div>
            </div>
        </div>
        <CommentModal handlePostLike={handlePostLike} handleIsSave={handleIsSave} onClose={onClose} isOpen={isOpen} isPostLiked={isPostLiked} isSave={isSave} />
    </div>
  )
}

export default PostCard