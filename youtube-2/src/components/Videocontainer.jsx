import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import Buttonlist from './Buttonlist'
import {API_KYE} from '../utils/Constants/Constants'

const Videocontainer = () => {
  let [vidurl,setvidurl] = useState(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KYE}`)
  const changetogaming = ()=>{
    setvidurl(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=20&regionCode=IN&key=AIzaSyBev-Tjn7H0HLENbX3CUrcXNwyZi4CtVfM")
  }
  const changetomusic = ()=>{
    setvidurl(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=10&regionCode=IN&key=AIzaSyBev-Tjn7H0HLENbX3CUrcXNwyZi4CtVfM")
  }
  const changetoall = ()=>{
    setvidurl(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KYE}`)
  }
  const changetocomedy = ()=>{
    setvidurl(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=23&regionCode=IN&key=AIzaSyBev-Tjn7H0HLENbX3CUrcXNwyZi4CtVfM")
  
    }

    const changetonews = ()=>{
      setvidurl(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=25&regionCode=IN&key=AIzaSyBev-Tjn7H0HLENbX3CUrcXNwyZi4CtVfM")
    
      }
      const changetoedu = ()=>{
        setvidurl(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=28&regionCode=IN&key=AIzaSyBev-Tjn7H0HLENbX3CUrcXNwyZi4CtVfM")
      
        }

        const changetoamime = ()=>{
          setvidurl(" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=17&regionCode=IN&key=AIzaSyBev-Tjn7H0HLENbX3CUrcXNwyZi4CtVfM")
        }
         
    const [videos,setvideos] = useState(null)
    const getVideos =async ()=>{
      const Videos = await fetch(vidurl)
      const json = await Videos.json()
      setvideos(json.items)
    }
    useEffect(()=>{
            getVideos()
           
          
    },[vidurl]) 
   
     
     if(!videos) return
  return (
    <>
    <div>
       <button onClick={changetoall} className='mt-2 p-2 border w-20 ml-5  hover:scale-110 duration-300 hover:shadow-2xl rounded-2xl bg-black bg-opacity-25'>All</button>
       <button onClick={changetogaming} className='mt-2 p-2 w-20 ml-5  border hover:scale-110 duration-300 hover:shadow-2xl rounded-2xl bg-black bg-opacity-25'>Gaming</button>
       <button onClick={changetomusic} className='mt-2 p-2 w-20 ml-5 border hover:scale-110 duration-300 hover:shadow-2xl rounded-2xl bg-black bg-opacity-25'>Music</button>
       <button onClick={changetocomedy} className='mt-2 p-2 w-20 ml-5 border hover:scale-110 duration-300 hover:shadow-2xl rounded-2xl bg-black bg-opacity-25'>Comedy</button>
       <button onClick={changetonews} className='mt-2 p-2 w-20 ml-5 border hover:scale-110 duration-300 hover:shadow-2xl rounded-2xl bg-black bg-opacity-25'>NEWS</button>
       <button onClick={changetoedu} className='mt-2 p-2 w-28 ml-5 border hover:scale-110 duration-300 hover:shadow-2xl rounded-2xl bg-black bg-opacity-25'>Technology</button>
       <button onClick={changetoamime} className='mt-2 p-2 w-20 ml-5 border hover:scale-110 duration-300 hover:shadow-2xl rounded-2xl bg-black bg-opacity-25'>Sport</button>
      
    </div>
       <div className='flex flex-wrap  justify-center'>
        {
            videos.map((video)=><VideoCard  key={video.id} video={video}/>)
        }
        
    </div>

    </>
     )
}

export default Videocontainer