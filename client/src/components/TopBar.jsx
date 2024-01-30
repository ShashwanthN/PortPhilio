// TopBar.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdLightMode, MdDarkMode, MdArrowDropDownCircle, MdArrowDropDown, MdOutlineArrowDropDown, MdOutlineArrowDropDownCircle, MdPersonAdd, MdMyLocation } from 'react-icons/md';
import { MdNotifications, MdEditSquare, MdWork } from 'react-icons/md';
import { SetTheme } from '../redux/theme';
import { updateProfile, Logout } from '../redux/userSlice';
import { NoProfile } from '../assets';
import DropdownMenu from '../components/DropdownMenuProfile';
import { useForm } from 'react-hook-form';
import moment from "moment";

const TopBar = () => {
    const { user: data } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    const { user } = useSelector((state) => state.user);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleTheme = () => {
        const themeValue = theme === 'light' ? 'dark' : 'light';
        dispatch(SetTheme(themeValue));
    };

    const handleSearch = async (data) => {};

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='topbar w-full flex items-center text-bg justify-between py-2 md:py-1 px-4 bg-ascent-1'>
            <Link to='/' className='flex gap-2 items-center'>
                <span className='text-xl md:text-5xl bol font-semibold'>./PortPhilio/.</span>
            </Link>

            <div className='flex gap-4 items-center text-bg text-md md:text-xl relative'>
                
                <button onClick={() => handleTheme()}>
                    {theme === 'light' ? <MdDarkMode size={25} /> : <MdLightMode size={25} />}
                </button>

                <div className='lg:flex'>
                    <MdNotifications 
                     size={25}
                     />
                </div>

                <div
                    className='w-full flex items-center border-2 rounded-full bg-secondary border-grey  gap-2'
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                >
                    <Link to={'/profile/' + user?._id} className='flex text-bg2 gap-2'>
                        <img
                            src={user?.profileUrl ?? NoProfile}
                            alt={user?.email}
                            className='w-10 h-10 object-cover profilepic rounded-l-full'
                        />
                        <div className='flex profilecardhide sm:px-0 flex-col'>
                            <p className='text-sm bol'>
                                {user?.firstName}
                                {user?.lastName}
                            </p>
                            <span className='text-bg text-grey text-xs'>{user?.profession ?? 'New User'}</span>
                        </div>

                    </Link>

                    <div className='flex text-bg2 items-center gap-2  border-l-4 border-dashed border-grey rounded-r-full pr-1'>
                    {isDropdownOpen && <DropdownMenu onClose={() => setDropdownOpen(false)} user={user} />}
                        {user?._id === data?._id ? (
                            <MdArrowDropDown
                                size={35}
                                className='text-blue cursor-pointer'
                                onClick={() => dispatch(updateProfile(true))}
                                
                            />
                            
                            
                        ) : (
                            <button
                            className='bg-secondary textsm text-bg2 p-1 rounded'
                            onClick={{}}
                            >
                            <MdPersonAdd size={20} className='text-ascent-1'/>
                            </button>
                        )}


                    </div>
                    {/*<div className='w-full flex flex-col gap-2 py-4 border-b border-ascent-1'>
                        <div className='flex gap-2 intems-center text-ascent-2'>
                            <MdMyLocation className='text-md text-secondary'/>
                            <span>{user?.location ?? "Add Location"}</span>
                        </div>
                        <div className='flex gap-3 intems-center text-ascent-1'>
                            <MdWork className='text-lg text-ascent-1'/>
                            <span>{user?.profession ?? "Add Profession"}</span>
                        </div>

                    </div>
                    <div className='w-full flex flex-col gap-2 py-4 border-b border-ascent-1'>
                        <p className='text-xl text-ascent-1 med'>
                            {user?.friends?.length} Friends
                        </p>
                        <div className="flex items-center justify-between">
                            <span className='text-ascent-1'>
                                Who viewed your profile</span>
                                <span className='text-ascent-1 text-med'>{user?.friends?.length}</span>
                            
                        </div>
                        <span classNName='text-base text-blue'>
                            {user?.verified ? "verified Account":"Not Verified"}
                        </span>
                        <div className='flex items-center justify-between'>
                            <span className='text-ascent-1'>Joinded</span>
                            <span className='text-ascent-1 text-base'>
                                {moment(user?.createdAt).fromNow()}
                            </span>
                        </div>
                        </div>*/}
                    
                </div>
            </div>
        </div>
    );
};

export default TopBar;
