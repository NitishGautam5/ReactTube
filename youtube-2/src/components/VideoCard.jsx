import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import NumberConverter from './NumConverter';
import DateDifference from './Time';

const VideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const navepath = "/watch/" + video.id;
  const cnavpath = "/channal/" + video.snippet.channelId;

  const handleWatch = () => {
    navigate(navepath);
  };

  const chandleWatch = () => {
    navigate(cnavpath);
  };

  return (
    <div
     
      className='hover:bg-opacity-35 duration-200 bg-black border bg-opacity-20 lg:hover:shadow-xl rounded-xl lg:p-2 mt-5 lg:m-2'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

    >
    
      <img
        onClick={handleWatch}
        src={video.snippet.thumbnails.medium.url}
        alt=""
        className='hover:scale-110  hover:shadow-2xl cursor-pointer lg:rounded-xl w-screen h-42 lg:w-72 duration-500'
      />
      <div className='flex lg:pt-3'>
        <p className='hover:scale-105 duration-300 lg:font-bold font-semibold w-80 lg:w-64 ml-1 h-12 overflow-hidden'>
          {video.snippet.title}
        </p>
      </div>
      <div className='hover:scale-105 duration-300'>
        <div>
          <p className='opacity-70 mt-1 lg:font-medium'>{video.snippet.channelTitle}</p>
          <div className='flex opacity-70 font-medium'>
            <p className='flex'><NumberConverter num={video.statistics.viewCount} /> views</p>
            <p className='pl-3'><DateDifference dateString={video.snippet.publishedAt} /></p>
            {isHovered && (
              <button className='ml-4 font-bold bg-black bg-opacity-30  rounded-xl' onClick={chandleWatch}>
                Go to Channal
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
