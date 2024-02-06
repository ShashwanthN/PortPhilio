//import { NoProfile } from '../assets'
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { TextInputPost, } from "../components";
import { useForm } from 'react-hook-form';
import { MdPostAdd, MdUpdate, MdUpload, MdUploadFile } from 'react-icons/md';
import { StyledEngineProvider } from '@mui/material/styles';
import { ToggleButtonsMultiple } from '../components';
const Searchbar = () => {

    const { user } = useSelector((state) => state.user);
    const [errMsg, setErrMsg] = useState("");
    const [selectedOption, setSelectedOption] = useState('default');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });
    const [file, setFile] = useState(null);
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
      };

    const handlePostSubmit = async (data) => {

    };
    return (
        <div className='w-full h-full'>
            <form
                onSubmit={handleSubmit(handlePostSubmit)}
                className='bg-primary w-full p-3 flex rounded-md border-2 border-secondary mb-4'>

                {/*<div className='h-12 flex pr-2'>
                
                    <img
                        src={user?.profileUrl ?? NoProfile}
                        alt='userimg'
                        className='h-12 w-12 border-grey border-2 items-center rounded-full object-cover'
    />
    </div>*/}
    <div className='h-12 flex items-center'>
          {/* Dropdown menu */}
          <select
            value={selectedOption}
            onChange={handleDropdownChange}
            className='pl-4 bg-primary border-l-2 hover:bg-secondary border-t-2 text-3 border-b-2 bol text-sm h-12 border-grey items-center rounded-l-full text-ascent-2'
          >
            
            <option className='reg'
            value='default' disabled>
                select
            </option>
            <option className='reg'
            value='option3'>Public</option>
            <option className='reg '
            value='option1'>Quiet</option>
            <option className='reg' value='option2'>Private</option>
            {/* Add more options as needed */}
          </select>
          
        </div>
                <div className='w-full h-full  flex'>
                    <div className='w-full h-full flex'>
                    <TextInputPost
                        styles='postcreate flex w-full hover:bg-secondary h-12 pl-3 flex items-center transition-all duration-300 ease-in-out'
                        placeholder='Create post and announcement....'
                        
                        name="description"
                        register={register("description", {
                            required: "oops.... Your post can't be empty!"
                        })}

                        error={errors.description ? errors.description.message : ' '}


                    />

                    <label
                        htmlFor='imgUpload'
                        className=' h-12 p-5 items-center text-ascent-2 border-t-2 border-b-2 border-r-2 hover:border text-ascent-2 border-grey hover:bg-ascent-1 hover:text-primary border-dashed rounded-r-full bg-primary cursor-pointer flex items-center med text-ascent-2 hover:text-primary hover:bg-ascent-1 cursor-pointer transition-all duration-300 ease-in-out'
                    >
                        <input
                            type='file'
                            onChange={(e) => setFile(e.target.files[0])}
                            className='hidden'
                            id='imgUpload'
                            data-max-size='5120'
                            accept='.jpg, .png, .jpeg, .gif'
                        />
                        <MdUploadFile size={28} className='' />  {/* Added margin-right */}
                   
                    </label>
                </div>
                </div>

                {errMsg?.message && (
                    <span
                        role='alert'
                        className={`text-sm ${errMsg?.status === 'failed'
                            ? "text-[#f64949fe]"
                            : "text-[#2ba150f2]"
                            } mt-0.5`}
                    >
                        {errMsg?.message}
                    </span>
                )}
 {/* <ToggleButtonsMultiple/> */}
    

            </form>
            
        </div>
    )
}

export default Searchbar