import React from 'react'
import Head from './Head';
import Sidebar from "./Sidebar";
import Maincontainer from './Maincontainer';
import { Outlet } from 'react-router';


const Body = () => {
  
  return (
    <div className=' bg-gradient-to-tr to-purple-500 via-cyan-500 from-teal-300'>
      <Head/>
       <Sidebar/>
      
       <Outlet/>
       
        


    </div>
  )
}

export default Body