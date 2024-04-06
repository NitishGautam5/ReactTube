import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Buttonlist from './Buttonlist'

const UnderW = ({catid}) => {
    const [videos,setvideos] = useState(null)
    const getVideos =async ()=>{
      const Videos = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId="+ catid +"&regionCode=IN&key=")
      const json = await Videos.json()
      setvideos(json.items)
    }
    
    useEffect(()=>{
            getVideos()
          
          
    },[]) 
     
     if(!videos) return
  return (
    <>
    <div>
       <div className=''>
       <Buttonlist/>
    </div>
      
     <div className='lg:flex lg:flex-wrap'>
        {
            videos.map((video)=><VideoCard  key={video.id} video={video}/>)
        }
        
    </div>

    </div>
   
    </>
     )
}

export default UnderW
