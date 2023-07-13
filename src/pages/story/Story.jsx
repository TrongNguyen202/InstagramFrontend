import React from 'react'
import StoryViwer from '../../components/story/storycomponent/StoryViwer'


const Story = () => {
    const story =[
        {
            image: "https://cdn.pixabay.com/photo/2016/06/29/08/42/wedding-dress-1486260_640.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/04/16/19/51/girl-1333640_640.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/11/08/05/18/hot-air-balloons-1807521_640.jpg"
        },
        {
            image: "https://cdn.pixabay.com/photo/2016/11/20/18/18/girl-1843477_640.jpg"
        },

    ]

  return (
    <div>
        <StoryViwer stories={story}  />
    </div>
  )
}

export default Story