import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref=useRef(null)
    const data=[
        {
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing..",
            filesize:"0.7mb",
            close:false,
            tag: {isopen:true,tagTitle:"Download Now",tagcolor:"green"}
        },
        {
          desc:"Lorem ipsum dolor sit amet consectetur adipisicing..",
          filesize:"0.9mb",
          close:true,
          tag: {isopen:false,tagTitle:"Download Now",tagcolor:"green"}
      },
      {
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing..",
        filesize:"0.4mb",
        close:false,
        tag: {isopen:true,tagTitle:"Upload",tagcolor:"blue"}
    }
    ]

  return (
    <div ref={ref} className='top-0 left-0 fixed w-full h-full z-[3] flex-wrap gap-5 p-10'>
      {
        data.map((item,key)=>(
            <Card data={item} refe={ref}/>
        ))
      }
    </div>
    
  )
}

export default Foreground