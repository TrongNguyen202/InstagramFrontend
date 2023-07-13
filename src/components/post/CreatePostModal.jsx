import { Button, Img, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React, { useState } from 'react'
import {FaPhotoVideo} from 'react-icons/fa'
import './CreatePostModal.css'
import {GrEmoji} from 'react-icons/gr'
import {GoLocation} from 'react-icons/go'
import { useDispatch } from 'react-redux'
import { createPostAction } from '../../redux/post/Action'
import { UpLoadTocloudinary } from '../../config/UploadToCloudinary'
function CreatePostModal({onClose, isOpen}) {
const [isDragOver,setIsDragOver] = useState(false)
const [file, setFile] = useState()
const [caption,setCaption] = useState("")
const [imageUrl,setImageUrl] = useState("")
const [location,setLocation] = useState("")
const dispatch = useDispatch()
const token = localStorage.getItem("token");
    const handleDrop=(event)=>{
      event.preventDefault()
      const droppedFile = event.data.Transfer.file[0]
      if(droppedFile.type.startsWith("image/")|| droppedFile.type.startsWith("video/")){
        setFile(droppedFile)
      }

    }
    const handleDragOver=(event)=>{
      event.preventDefault()
      event.dataTransfer.dropEffect="coppy"
      setIsDragOver(true)
    }
    const handleDragLeave=()=>{
      setIsDragOver(false)
    }
    const handleOnChange=async(e)=>{
      const file = e.target.files[0]
      if(file&& (file.type.startsWith("image/")|| file.type.startsWith("video/"))){
        const imgUrl = await UpLoadTocloudinary(file)
        setImageUrl(imgUrl)
        setFile(file)
      }
      else{
        setFile(null)
        alert('please select an image or video')
      }
    }
    const handleCaptionChange=(e)=>{
           setCaption(e.target.value)
    }

const handleCreatePost=()=>{
  const data={token:token, data:{
    caption,location,image:imageUrl
  },
}
dispatch(createPostAction(data))

}


  return (
    <div>
  <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          
        
           <div className='flex justify-between items-center py-1 px-10'>
            <p>
              Create New Post
            </p>
            <Button variant={"ghost"} size={'sm'} color={'blue'} onClick={handleCreatePost}>
              Share
            </Button>
           </div>
             <hr/>
          <ModalBody>
            <div className='h-[70vh] flex justify-between  pb-5' >
              <div className='w-[50%]'>
                
                {!file&&<div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className='drag-drop h-full'
                >
                  <div>
                    <FaPhotoVideo className='text-3xl' />
                    <p>Drag picture or video here</p>
                  </div>
                  <label htmlFor="file-upload" className='custom-file-upload'  >select from computer</label>
                  <input type="file" id='file-upload' accept='image/*, video/*' onChange={handleOnChange} />
                </div>}
              {file&& <img className='max-h-full' src={URL.createObjectURL(file)} alt="" /> }
              </div>
              <div className='w-[1px] border-2 h-full'></div>
              <div className='w-[50%]' >
                <div className='flex items-center px-2 ' >
                  <img className='w-7 h-7 rounded-full' src="https://cdn.pixabay.com/photo/2023/05/31/17/54/cat-8031947_1280.jpg" alt="" />
                  <p className='font-semibold ml-4' > username</p>
                </div>
                <div className='px-2'>
                  <textarea onChange={handleCaptionChange} placeholder='write caption...' className='captionInput' name='caption' rows="8"></textarea>
                </div>

                <div className='flex justify-between px-2'>
                  <GrEmoji/>
                  <p className='opacity-70'>{caption?.length} /2,200</p>
                </div>
                <hr />
                <div className='flex p-2 justify-between items-center'>
                  <input onChange={(e)=> setLocation( e.target.value)} className='locationInput' type="text" placeholder='location' />
                  <GoLocation/>
                </div>

              </div>
            </div>
        
          </ModalBody>
          
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CreatePostModal