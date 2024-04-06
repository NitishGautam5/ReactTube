import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isSidebarOpen = useSelector(store => store.app.isopen);

  useEffect(() => {
    setIsOpen(isSidebarOpen);
  }, [isSidebarOpen]);

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={`z-20 absolute transition-all duration-300 ${isOpen ? 'left-0' : '-left-full'}`}>
      <div className='text-white shadow-2xl fixed bg-black bg-opacity-70 border lg:w-1/5'>
        <div className='lg:p-6 p-1'>
          <p onClick={goHome} className='cursor-pointer p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXg&s" className='h-6 mr-3' alt="" />Home
          </p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Shorts
          </p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Live
          </p>
        </div>
        <div className='lg:p-6 p-1'>
          <p className='text-xl font-bold'>Subscription</p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Popular
          </p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Gaming
          </p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Movies
          </p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Sports
          </p>
        </div>
        <div className='lg:p-6 p-1'>
          <p className='text-xl font-bold'>Explore</p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Popular
          </p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Gaming
          </p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Movies
          </p>
          <p className='p-2 flex font-semibold'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtmCepyp6ktoKc0AR_v3uQnoTFhAzYmRvvQLFT8WPXG&s" className='h-6 mr-3' alt="" />Sports
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
