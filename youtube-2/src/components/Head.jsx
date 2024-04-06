import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tooglemenu } from "../utils/ReduxThings/AppL";
import { useNavigate } from "react-router";
import { UseSelector } from "react-redux";
const Head = () => {
  const userdata = useSelector((store)=>store.userdata)
  console.log(userdata)

  const search = useRef()
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleclick = ()=>{
       
        dispatch(tooglemenu())
    }
    const loginuser=()=>{
      navigate("/login")
    }
    const handleSearch = ()=>{
      const   path ="/SearchResult/"+ search.current.value
       navigate(path)
    }
  return (
    <div className=" bg-gradient-to-br from-neutral-500 border bg-opacity-35 flex  justify-between lg:p-2 p-1 shadow-2xl">
      <div className="flex ">
        <img
          onClick={handleclick}
          className=" cursor-pointer w-5   lg:w-9 lg:h-9"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt=""
        />
        <img
          className=" ml-5 lg:ml-20 h-10 "
          src="https://cdn4.iconfinder.com/data/icons/social-media-2273/64/social_media_network_online_youtube_video_multimedia-512.png"
          alt=""
        />
      </div>
      <div className=" mt-2 lg:mt-0  flex ">
        
        <input ref={search} className="  lg:h-10 h-6 rounded-s-full w-36 lg:w-80 pl-8 lg:text-lg  border  bg-black bg-opacity-25"  placeholder="Search" type="text" />
        <button onClick={handleSearch} className=" h-6  bg-gray-600 bg-opacity-20 lg:h-10 font-semibold text-lg lg:w-16 border  rounded-e-full">🔍</button>
      </div>
      <div  onClick={loginuser} className=" cursor-pointer col-span-1 flex flex-col items-center">
        <img
          className="h-5 w-5"
          src="https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"
          alt=""
          
        />
        <p className=" font-semibold h-1">{userdata ? userdata.displayName : "Login here"}</p>
       
      </div>
    </div>
  );
};

export default Head;
