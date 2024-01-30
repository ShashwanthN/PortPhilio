import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { user } from '../assets/data';
import { NoProfile } from '../assets';
import {MdEditSquare, MdOutlineSettings} from 'react-icons/md';
import { updateProfile } from '../redux/userSlice';

const ProfileCard = ({user}) => {
    const { user: data, edit } = useSelector((state) => state.user);
    const dispatch = useDispatch();
  return (
    
    <div className='w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4'>
        <div className='w-full flex flex-col justify-between border-b pb-5 border-ascent-1'>
            <Link to={"/profile/" + user?._id}
            className='flex gap-2'>
            <img 
            src={user?.profileUrl ?? NoProfile} 
            alt={user?.email}
            className='w-14 h-14 object-cover rounded-full'
            />
            <div className='flex flex-col justify-center'>
                <p className='text-lg font-medium text-ascent-1'>
                    {user?.firstName}{user?.lastName}
                </p>
                <span className='text-ascent-1'>
                    {user?.profession ?? "  "}
                </span>
            </div>
            </Link>
            <div className=''>
                {user?._id===data?._id? (
                    <MdOutlineSettings
                    size={22}
                    className='text-blue cursor-pointer'
                    onClick={()=>dispatch(updateProfile(true))}
                />):("")}
            </div>
        </div>
    </div>
  )
}

export default ProfileCard