import React, { useEffect, useState } from 'react'
import './Progressbar.css'

function Progressbar({index, activeIndex,duration}) {
    const [progress, setprogress] = useState(0)
    const isActive =index==activeIndex;
    useEffect(()=>{
        const interval = setInterval(()=>{
            setprogress((preProgress)=>{
                if(preProgress<100){
                    return preProgress+1
                }
                clearInterval(interval)
                return preProgress;
            })
        }, duration/100)
return ()=> {
    clearInterval(interval)
}
    },[duration,activeIndex])

useEffect(()=>{
setprogress(0)
},[activeIndex])

  return (
    <div className={`progress-bar-container ${isActive?"active":""}`} >
        
        <div className={`${isActive?"progress-bar":""}`} style={{width:`${progress}%`}} >

        </div>
    </div>
  )
}

export default Progressbar