import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import {FaComments} from 'react-icons/fa'
import  './ReqUserPostcard.css'
function ReqUserPostcard({user,post}) {
  return (
    <div>
        <div className="post w-60 h-60">
            
                <img src={post.image} alt='' />

          <div className='overlay'>
          <div className='overlay-text flex justify-between'>
            <div>
                <AiFillHeart></AiFillHeart> <span>{post.likedByUsers.length}</span>
            </div>
            <div>
                <FaComments></FaComments> <span>{post.comments.length}</span>
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default ReqUserPostcard