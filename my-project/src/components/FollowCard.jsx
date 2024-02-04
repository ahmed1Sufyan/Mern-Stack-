import React from 'react'
import { Container } from './Container'
import { Premium } from './Premium'
import { Link } from 'react-router-dom'

export const FollowCard = ({name,email,img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
}) => {
  return (
    <Container className="flex items-center  py-1 mb-2 font-sans">
        <div className='flex gap-3 w-[74%]'>
       <div >
       <img
          className="size-10 rounded-full"
          src={img}  alt="Rounded avatar"
        ></img>
       </div>
       <div >
        <div className='font-bold text-sm flex gap-1 items-center'>
        <div>{name}</div>
        <Premium/>
        </div>
        <div className='text-sm text-gray-400'>{email}</div>
       </div>
        </div>
       <button className='bg-black text-[12px]  h-8 w-[70px] font-bold text-white rounded-[25px]'>Follow</button>
    </Container>
  )
}
