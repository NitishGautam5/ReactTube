import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NumberConverter from './NumConverter'
import VcardForChannal from './VcardForChannal'
const Channalinfo = () => {
    const id = useParams()
    console.log()
    const [all,setall] = useState(null)
    const data = async ()=>{
        const idata = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id="+id.cid+"&maxResults=50&key=AIzaSyA5L3v4HbB2icJ2n-Agn0T_nfPWxjkKmRA")
        const json =await idata.json()
        setall(json)
    }
    useEffect(()=>{
        data()
    },[])
    if(!all) return
    console.log(all)
  return (
    <> 
    <div>
        <div className='  lg:w-[100%] lg:flex lg:justify-center' >
      <div className='  lg:w-[70%]'>
        <div className='pt-6 mt-1 bg-black bg-opacity-35 rounded-lg lg:flex'>
            
            <img className=' lg:h-44 rounded-full h-60  lg:rounded-full lg:w-44' src={all.items[0].snippet.thumbnails.high.url} alt="" />
             <div className='lg:pl-12 pl-2 pt-5'>
                 <p className=' font-bold  text-3xl'>{all.items[0].snippet.localized.title}</p>
                <div className='pt-3 flex flex-wrap'>
                     <p className='pr-3'>{all.items[0].snippet.customUrl}</p>
                    
                    {all.items[0].statistics.hiddenSubscriberCount==false && <p className=' flex pr-4'><NumberConverter num= {all.items[0].statistics.subscriberCount}/>subscriber</p>
                     }
                     <p className=' flex pr-4'><NumberConverter num= {all.items[0].statistics.videoCount}/>videos</p>
                     <p className=' flex'><NumberConverter num= {all.items[0].statistics.viewCount}/>View</p>
                     
                </div>
                 <p className='  pt-4'>{all.items[0].snippet.localized.description}</p>
               
                 <div className=' bg-black font-bold mt-6 text-white text-center p-2 cursor-pointer rounded-full w-28 h-10'>Subscribe</div>
           
                 </div>
                 
        </div>
         <div className='mt-5'>
            < VcardForChannal/>
           
           </div>
      </div>
      
    </div>
     
    </div>
   
     
    </>
  
  )
}

export default Channalinfo