import React from 'react'
import { Container } from './Container'
import { FollowCard } from './FollowCard'
import { Link } from 'react-router-dom'

export const Follow = () => {
  const prop = [
    {
      name : "Global Index",
      email : "@TheGlobal_Index",
      img : "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1427"
    },{
      name : "NBC Sports",
      email : "@NBC_Sports"
    },{
      name : "Cristiano Ronaldo",
      email : "@Cristiano_Ronaldo", 
      img : "https://m.media-amazon.com/images/I/816Jx5yrPcL._AC_UF1000,1000_QL80_.jpg"
    }
  ]
  return (
    <Container className="m-2 p-3  bg-gray-50 border border-gray-200 rounded-[20px] font-sans">
        <h1 className='ml-2 my-2 font-bold text-lg '>Who to follow</h1>
       {
        prop.map((item, idx) => {
          return <FollowCard key={idx} name={item.name} email={item.email} img={item.img}/>
        })
       }
        <Link to={'/'} className="py-1 ml-2  text-cyan-500">
        Show more
        </Link>
    </Container>
  )
}
