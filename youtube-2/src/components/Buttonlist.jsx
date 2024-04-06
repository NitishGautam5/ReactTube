import React from 'react'
import Button from './Button'
const Buttonlist = () => {
    const list = ['All','Live','Gaming','Sport','Narendra Modi','BJP',]
  return (
    <div className='flex'>
       {
        list.map((name,index)=><Button key={index} name={name}/>)
       }
      
    </div>
  )
}

export default Buttonlist