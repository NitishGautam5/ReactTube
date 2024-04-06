import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import DateDifference from './Time'
import { useNavigate } from 'react-router'
const SearchResult = () => {
  const navigate = useNavigate()
  const search = useParams().search
  const [data,setdata] = useState(null)
  const[vids,setvids] = useState("qrG5nPhQaIk")
  const handle = async ()=>{
    const api = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="+search+"&type=video&key=AIzaSyCJ7ki5Kqx4JcVEvINqOGUL1uj43mABVJs")
    const json = await api.json()
     setdata(json)
  }
  useEffect(()=>{handle()},[search])
  
  if(!data) return
  console.log(data)
  const path = "/watch/" + vids
console.log(path)
const handleclick = (videoId) => {
  const path = "/watch/" + videoId;
  navigate(path);
};
  return (
    <div>
      
      {
        data.items.map((v)=>
          <div className=' flex lg:ml-20 lg:w-[80%] shadow-2xl hover:border duration-200 ' >
            <div className='lg:p-3 lg:m-4 lg:flex '>
<div>
   <img onClick={() => {
                                const clickedVideoId = v.id.videoId
                                setvids(clickedVideoId); // Update vids with clicked video ID
                                handleclick(clickedVideoId); // Navigate to the clicked video
                            }} className=' cursor-pointer w-screen lg:rounded-2xl' src={v.snippet.thumbnails.medium.url} alt="" />
          
</div>
 <div className=''>
   <p className=' ml-5 font-bold lg:text-xl lg:w-96 '>{v.snippet.title}</p>
  
  <div className='flex'>
      <p className=' ml-5 font-semibold  text-lg pt-2  max-w-52 '>{v.snippet.
channelTitle
}</p>
      <p className='mt-3 font-medium flex ml-3  text-sm'><DateDifference  dateString ={v.snippet.publishTime} />.  ago</p>
  </div>
 
  <p className=' text-sm mt-2 ml-5 lg:w-96  '>{v.snippet.
description
}</p>

 </div>
           
            </div>
            </div>
        )
      }
    </div>
  )
}

export default SearchResult