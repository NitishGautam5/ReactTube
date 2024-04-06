import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import DateDifference from './Time'

const VcardForChannal = () => {
  const navigate = useNavigate()
   const id = useParams()
   const[vdata,setvdata] = useState(null)
   const[vids,setvids] = useState("qrG5nPhQaIk")
   const data = async ()=>{
    const da = await fetch("https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId="+ id.cid+"&maxResults=50&key=AIzaSyA5L3v4HbB2icJ2n-Agn0T_nfPWxjkKmRA")
    const json = await da.json()
    setvdata(json)
     
}

useEffect(
    ()=>{
        data()
    },[]
)
console.log(vdata)
if(!vdata) return
     
  


 {
            vdata.items.map((vd)=>{
            // if(vd. contentDetails.upload) console.log(vd. contentDetails.upload.videoId )
            //   if(vd. contentDetails.playlistItem) console.log(vd. contentDetails.playlistItem.resourceId .videoId)
             })
          }
const path = "/watch/" + vids
console.log(path)
const handleclick = (videoId) => {
  const path = "/watch/" + videoId;
  navigate(path);
};
  return (
    <div className='lg:flex lg:flex-wrap lg:justify-center '>
    
      {
        vdata.items.map((vd)=>
              <div className='  ' >
                <div className=' flex lg:ml-5 mt-8 bg-black  bg-opacity-35 border p-2'>
                  
                  <img  onClick={() => {
                                const clickedVideoId = vd.contentDetails.upload
                                    ? vd.contentDetails.upload.videoId
                                    : vd.contentDetails.playlistItem.resourceId.videoId;
                                setvids(clickedVideoId); // Update vids with clicked video ID
                                handleclick(clickedVideoId); // Navigate to the clicked video
                            }} className=' cursor-pointer  rounded-xl lg:rounded-3xl lg:h-44 lg:w-80 w-40'  src={vd.snippet.thumbnails.medium.url} alt="" />
                  <div className='  lg:ml-5 lg:mt-5'>
                      <p className=' font-semibold lg:w-80 max-h-[70px] lg:max-h-32  overflow-hidden' >{vd.snippet.title}</p>
                  <div className='flex'>
                    <div className='flex lg:mt-5'>
                       <p className='lg:pr-5 pr-2 max-w-24 h-5 overflow-hidden  lg:max-w-52'>{vd.snippet.channelTitle}</p>
                   <DateDifference dateString={vd.snippet.publishedAt} />
                     <p className='pl-1'>ago</p>
                    </div>
                    
                  </div>
                  </div>
                
                 
                </div>
              </div>
        )
      }
         
    </div>
  )
}

export default VcardForChannal