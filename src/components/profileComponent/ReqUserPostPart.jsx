import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { BiBookmark } from 'react-icons/bi'
import ReqUserPostcard from './ReqUserPostcard'
import { useDispatch } from 'react-redux'
import { findPostByUserId } from '../../redux/post/Action'
import  './ReqUserPostcard.css'
function ReqUserPostPart({post,user}) {
    const [activeTabs, setActiveTabs] = useState()
    const handleActiveTab=(tab)=>{
        setActiveTabs(tab)
    }
    const [changePost,setChangePost] = useState(false)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
  
    const tabs=[
        {
            tab:'Post',
            icon:<AiOutlineTable/>,
           
        },
        {
            tab:'Reels',
            icon:<RiVideoAddLine/>,
            
        },
        {
            tab:'Saved',
            icon:<BiBookmark/>,
            
        },
        {
            tab:'Tagged',
            icon:<AiOutlineUser/>,
            
        }

    ]
    const findAllPostOfUser=()=>{
        const data = {
            token:token,
            userId: user.id
        }
        dispatch(findPostByUserId(data))
        
    }
    const findAllPostSaveOfUser=()=>{
        setChangePost(true)
    }
  return (
    <div>
        <div className='flex space-x-14 border-t relative'>
            {tabs.map((item)=>
                <div onClick={() => handleActiveTab(item.tab)} className={`${activeTabs === item.tab ? "border-t border-black" : "opacity-60"} flex items-center cursor-pointer py-2 text-sm`}>
                    <p >{item.icon}</p>
                    <p onClick ={()=>{
                        if(item.tab === 'Post'){
                            findAllPostOfUser();
                            setChangePost(true)
                        }
                        if(item.tab === 'Saved'){
                            findAllPostSaveOfUser();
                            setChangePost(false)
                        }
                    }}   className='ml-2'>{item.tab}</p>
                </div>
            )}
        </div>
       { changePost===true && <div className='flex flex-wrap mt-5 '>
        {post?.userPost2?.map((post)=><div>
        <ReqUserPostcard user={user} post={post}  />
        </div>) } 
       
       </div>}
       {changePost===false && <div className='flex flex-wrap mt-5 '>
       {user?.savedPost.map((post)=><div>
        <ReqUserPostcard user={user} post={post}  />
        </div>) }
        </div>}
    </div>
  )
}

export default ReqUserPostPart