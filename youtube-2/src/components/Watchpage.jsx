import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UnderW from "./UnderW";
import Comment from "./Comment";
import NumberConverter from "./NumConverter";
const Watchpage = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [open,setopen] = useState(false)
const opendis = ()=>{
   setopen(!open)
}
  const [videoitem, setvideoitem] = useState(null);
  const data = async () => {
    let Njson = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        id.id +
        "&key=AIzaSyBev-Tjn7H0HLENbX3CUrcXNwyZi4CtVfM"
    );
    let json = await Njson.json();
    setvideoitem(json);
  };
  useEffect(() => {
    data();
  }, [id.id]);
  if (!videoitem) return;

  const cnavpath = "/channal/" + videoitem.items[0].snippet.channelId;

  const chandleWatch = () => {
    navigate(cnavpath);
  };

  const vdata = videoitem.items[0];

  return (
    <>
      <div className="">
        <div className="">
          <div className="lg:flex ">
            <div className=" lg:p-2 lg:m-2 ">
              <iframe
                className="lg:w-[650px] lg:h-[365px] w-screen h-48 lg:rounded-2xl"
                src={"https://www.youtube.com/embed/" + vdata.id}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="lg:p-2 m-1 lg:mt-5">
              <p className=" text-lg   font-extrabold">{vdata.snippet.title}</p>
              <div className=" flex font-bold opacity-75 lg:p-1">
                <NumberConverter num={vdata.statistics.viewCount} /> views
                <p onClick={opendis} className=" cursor-pointer pl-3"> Discription ... </p>
              </div>
              {open==true &&<div className=" mt-4 font-semibold">
                <p className=" cursor-pointer  overflow-y-scroll lg:h-20 h-60 ">
                  {vdata.snippet.description}
                </p>
              </div>}
              <div className=" mt-4 flex justify-between">
                <div className="flex cursor-pointer " onClick={chandleWatch}>
                  <div className=" rounded-full bg-slate-600 bg h-12 w-12"></div>
                  <p className="m-2  text-lg opacity-90 font-semibold">
                    {vdata.snippet.channelTitle}
                  </p>
                </div>
                <p className="lg:p-2 p-1 h-10 lg:h-12 hover:bg-white hover:text-black bg-black text-center lg:w-32  rounded-full  text-white lg:font-semibold text-lg  lg:text-xl">
                  Subscribe
                </p>
              </div>
              <div className="  flex p-1 lg:p-3 lg:m-3">
                <div className="hover:text-white flex hover:bg-black  rounded-s-3xl border border-black h-10 lg:h-12 p-2  font-bold lg:text-lg ">
                  
                  <img
                    className=" h-7 rounded-full "
                    src="https://images.rawpixel.com/image_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzMi1uaW5nLTQxXzEta2xidW42ankuanBn.jpg"
                    alt=""
                  />
                  <NumberConverter num={vdata.statistics.likeCount} />
                </div>
                <div className="w-16 rounded-e-3xl border hover:text-white hover:bg-black  border-black h-10 lg:h-12 p-2  font-bold text-lg ">
                  
                  <img
                    className="  rotate-180  h-7 rounded-full "
                    src="https://images.rawpixel.com/image_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkzMi1uaW5nLTQxXzEta2xidW42ankuanBn.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex">
          <div className="">
            <UnderW catid={vdata.snippet.categoryId} />
          </div>

          <div className="">
            <p className=" shadow-2xl shadow-black  bg-black bg-opacity-10 font-semibold text-lg">
              {vdata.statistics.commentCount} Comments
            </p>
            <div className=" ">
               <Comment id={vdata.id} />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchpage;
