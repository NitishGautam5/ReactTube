import React from 'react'

const Button = ({name}) => {
  return (
    <div className=''>
          <button className=' p-1 pl-4 pr-4  ml-6  bg-gray-700 bg-opacity-20 hover:bg-black hover:text-white font-semibold  rounded-lg  mt-4'>{name}</button>
   
    </div>
  )
}

export default Button