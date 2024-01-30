import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';
import CustomButton from './CustomButton';
import { useForm } from 'react-hook-form';
import { MdLightMode, MdDarkMode, MdSettings } from 'react-icons/md';
import { SetTheme } from '../redux/theme';
import { Logout } from '../redux/userSlice';

const Subtopbar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleTheme = () => {
    const themeValue = theme === 'light' ? 'dark' : 'light';
    dispatch(SetTheme(themeValue));
  };

  const handleSearch = async (data) => {};

  return (
    <div className="sidebar sidebarstyles w-16 bg-bg p-4 flex flex-col items-start border-r-2 border-grey text-ascent-1 overflow-scroll">
      <Link to="/" className="flex gap-2 items-center mb-8">
        <span className="text-md text-bg2 md:text-xl reg"></span>
      </Link>

      {/* Additional sidebar links or components can be added here */}

      <div className="flex flex-col gap-4 mt-auto cursor-pointer">
        <div className="cursor-pointer" onClick={handleTheme}>
          {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
        </div>
        <MdSettings />
      </div>
    </div>
  );
};

export default Subtopbar;
