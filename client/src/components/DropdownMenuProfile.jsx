// DropdownMenu.jsx
import React, { useRef, useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Logout, updateProfile } from '../redux/userSlice';

const DropdownMenu = ({ onClose, user }) => {
    const dispatch = useDispatch();
    const dropdownRef = useRef();

    const handleLogout = () => {
        dispatch(Logout());
        onClose(); // Close the dropdown after clicking Logout
    };

    const handleEditProfile = () => {
        dispatch(updateProfile(true));
        onClose(); // Close the dropdown after clicking Edit Profile
    };

    const handleDropdownClick = (e) => {
        e.stopPropagation(); // Prevent closing the dropdown when clicking inside
    };

    useEffect(() => {
        const closeDropdownOnOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('click', closeDropdownOnOutsideClick);

        return () => {
            document.removeEventListener('click', closeDropdownOnOutsideClick);
        };
    }, [onClose]);

    return (
        <div
            ref={dropdownRef}
            className='absolute top-2/3 right-0 bg-secondary shadow-lg items-center justify-content-center left-0'
            onMouseEnter={() => {}}
            onMouseLeave={onClose}
            onClick={handleDropdownClick}
        >
            
            <div className='flex flex-col'>
            <button
                onClick={handleEditProfile}
               
                className='text-sm text-ascent-1   p-2 bol h-1/6 mt-1'> 
                Edit Profile
            </button>

            <button
                onClick={handleLogout}
                title='Logout'
                className='text-sm text-ascent-1  med h-1/6  mt-1'
            >Logout</button>
            {/* Add more components or actions as needed */}
            </div>
        </div>
    );
};

export default DropdownMenu;
