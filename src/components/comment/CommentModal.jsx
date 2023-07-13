import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'
import {BsBookmarkFill, BsThreeDots,BsBookmark, BsEmojiSmile} from 'react-icons/bs'
import {FaRegComment} from 'react-icons/fa'
import {RiSendPlaneLine} from 'react-icons/ri'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './CommentModal.css'
import { useDispatch, useSelector } from 'react-redux'
import { createCommentAction, findPostCommentAction } from '../../redux/comment/Action'
import { useParams } from 'react-router-dom'
import { findPostByIdAction } from '../../redux/post/Action'
function CommentModal({onClose,isOpen,isSave,isPostLiked,handlePostLike,handleIsSave}) {
 const [CommentContent, setCommentContent] = useState("")
 const dispatch = useDispatch()
const token = localStorage.getItem("token")

const {postId} = useParams() 
   const {comment,post,user} =useSelector(store=>store)
   console.log("post", post)
   useEffect(()=>{
    const data={
        token:token,
        postId
    }
      
        dispatch(findPostByIdAction(data))
      
   },[comment.createdComment,postId])
  return (
    <div>
           <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          
          <ModalBody>
            <div className='h-[75vh] flex'>
                <div className='w-[45%] flex flex-col justify-center'>
                    <img className='max-h-full w-full' src="https://cdn.pixabay.com/photo/2023/03/02/19/37/bridge-7826205_1280.jpg" alt="" />
                </div>

                <div className=' w-[55%] pl-2 relative'>
                    <div className='flex justify-between items-center border py-2 rounded-md w-full'>
<div className='flex items-center'>
    <div>
        <img className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/03/26/19/57/mountain-7879029_1280.jpg" alt="" />
    </div>
    <div className='ml-2'>
        <p>{user.reqUser.username}</p>
    </div>
</div>

    <BsThreeDots className='text-xl cursor-pointer ' />

</div>
<hr/>
<div className='comment'>
{post.singlePost?.comments.map(comment => (
  <CommentCard key={comment.id} comment={comment} />
))}
</div>
<div className='absolute bottom-0 w[95%]'>
<div className='flex justify-between items-center w-full py-4 '> 
            <div className='flex items-center space-x-5'>
                {isPostLiked?<AiFillHeart className='text-2xl hover:opacity-50 cursor-pointer text-red-500' onClick={handlePostLike}/>:<AiOutlineHeart className='text-2xl hover:opacity-50 cursor-pointer'  onClick={handlePostLike} />}
                <FaRegComment className='text-xl hover:opacity-50 cursor-pointer'/>
                <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer'/>
            </div>
            <div className='cursor-pointer'>
                {isSave? <BsBookmarkFill className='text-xl hover:opacity-50 cursor-pointer' onClick={handleIsSave} />:
                <BsBookmark className='text-xl hover:opacity-50 cursor:pointer' onClick={handleIsSave}/>}
               
            </div>
            </div>           
                
               <div className='w-full py-2'>
                <p>10 likes</p>
                <p className='opacity-50 text-sm' >one day ago</p>
                </div> 
                <div>
                <div className='flex w-full items-center '>
                    <BsEmojiSmile className='text-2xl cursor-pointer'/>
                    <input className='commentInput w-full ' type="text" placeholder='add a comment...'
                    onChange={(e)=>setCommentContent(e.target.value)}
                    onKeyDown={(e) => {
                        const data={
                            postId,
                            token:token,
                            data:{
                                content:CommentContent
                            }
                        }
                        if (e.key === 'Enter') {
                          dispatch(createCommentAction(data))
                          
                        }
                        
                      }}
                    />
                </div>
            </div>
            <div/>
                </div>
                </div>
               
            </div>
          </ModalBody>
      
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CommentModal