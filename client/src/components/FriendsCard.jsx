import React from 'react'
import { Link } from 'react-router-dom'
import { NoProfile } from '../assets'

const FriendsCard = ({friends}) => {
  return (
    <div className='w-full bg-primary shadow-sm rounded-lg px-6 py-5 border-2 border-secondary'>
        <div className='flex items-center justify-between text-xl text-ascent-1 pb-2 border-b border-ascent-1'>
            <span> Friends </span>
            <span>{friends?.length}</span>
        </div>
        <div className='w-full flex flex-col gap-4 pt-4'>{
            friends?.map((friend)=>(
                <Link to={"/profile/" + friend?._id}
                key={friend?._id}
                className='w-full flex gap-4 items-center cursor-pointer'
                >
                <img 
                src={friend?.profileUrl ?? NoProfile}
                alt={friend?.firstName}
                className='w-10 h-10 object-cover rounded-full'
                />
                <div className='flex-1'>
                  <p className='text-sm med text-bg2'>
                    {friend?.firstname}{friend?.lastName}
                  </p>
                  <span className="text-xs reg text-ascent-2">
                    {friend?.profession ?? " "}
                  </span>
                </div>
                </Link>
            )
            )
}
        </div>
        </div>
  )
}

export default FriendsCard