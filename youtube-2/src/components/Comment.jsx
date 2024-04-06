import React, { useEffect, useState } from 'react'
import DateDifference from './Time'
const Comment = ({id}) => {
    const [cdata,setcdata]= useState(null)
    const [sset,ssset] = useState(false)

    const Cdata = async ()=>{
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&maxResults=100&textFormat=plainText&videoId="+id+"&key=AIzaSyBev-Tjn7H0HLENbX3CUrcXNwyZi4CtVfM")
        const json = await data.json()
        setcdata(json)
    }
    useEffect(()=>{
        Cdata()
    },[])
   
    if(!cdata) return
    
  return (
    <div className=' lg:h-[4600px] mt-1 h-[600px] overflow-y-scroll'>
        
        {
          cdata.items.map((text )=><div key={text.id} className=' hover:scale-110 pl-8 hover:border hover:bg-black hover:bg-opacity-35 duration-300 p-2 m-2'>
             <div className=' mr-20 flex'>
                <img className='h-10 w-10 rounded-full' src={text.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                <p className='m-2  text-sm font-bold'> {text.snippet.topLevelComment.snippet.authorDisplayName}</p>
                <p className='m-2  text-sm font-bold'><DateDifference dateString=  {text.snippet.topLevelComment.snippet.publishedAt}/></p>
             
             </div>
             <p className='ml-12   text-sm'>{text.snippet.topLevelComment.snippet.textDisplay
}</p>
  
  <div className=' text-sm  font-medium ml-12 mt-4 flex'>
    <div className=' mr-3 flex' ><img className='h-7 rounded-full mr-2' src="https://images.rawpixel.com/image_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzMi1uaW5nLTQxXzEta2xidW42ankuanBn.jpg" alt="" /> {text.snippet.topLevelComment.snippet.likeCount
}</div>
    <div className=' mr-3' > <img className='h-7 rounded-full rotate-180' src="https://images.rawpixel.com/image_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzMi1uaW5nLTQxXzEta2xidW42ankuanBn.jpg" alt="" /></div>
    <p> Reply({text.snippet.totalReplyCount
    })</p>

    {/* <die className="">
         {  text.replies  &&  <div >{text.replies.comments.map((c)=><div>
             {  c.snippet.textDisplay}
    
    </div>)}</div>}
    </die> */}
   
   
  </div>
            
            </div>)
        }
        
    </div>
  )
}

export default Comment