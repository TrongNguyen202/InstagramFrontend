import {AiFillCompass, AiFillHeart, AiFillMessage,AiFillPlusCircle, AiOutlineCompass, AiOutlineHome,AiOutlineMessage,AiOutlinePlusCircle,AiOutlineSearch, AiFillHome,AiOutlineHeart} from 'react-icons/ai'
import {RiVideoFill, RiVideoLine} from 'react-icons/ri'
import {BsFillSearchHeartFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import React from 'react'
export const mainu=[
    {
        title:"Home",icon: <AiOutlineHome/>, activeIcon: <AiFillHome/>
    },
    {
        title:"Search",icon: <AiOutlineSearch/>, activeIcon: <BsFillSearchHeartFill/>
    },
    {
        title:"Explore",icon: <AiOutlineCompass/>, activeIcon: <AiFillCompass/>
    },
    {
        title:"Reels",icon: <RiVideoLine/>, activeIcon: <RiVideoFill/>
    },
    {
        title:"Message",icon: <AiOutlineMessage/>, activeIcon: <AiFillMessage/>
    },
    {
        title:"Notification",icon: <AiOutlineHeart/>, activeIcon: <AiFillHeart/>
    },
    {
        title:"Create",icon: <AiOutlinePlusCircle/>, activeIcon: <AiFillPlusCircle/>
    },
   
    {
        title:"Profile",icon: <CgProfile/>, activeIcon: <CgProfile/>
    }
]