// Login.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { CustomButton, Loading, TextInput } from '../components';
import backgroundImage from '../assets/background.jpg';
import logodark from '../assets/logodark.png'; 
import logolight from '../assets/logolight.png';


const Login = () => {
    const theme = useSelector((state) => state.theme.theme);
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = async (data) => {
        // Your form submission logic here
    };

    const [errMsg, setErrMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    const logoSrc = theme === 'dark' ? logodark : logolight;

    return (
        <div>
            <div className="relative bg-primary w-full h-screen flex items-center justify-center">
                {/* Container for all content */}
                <div className="absolute top-5/6 bottom-5/6 left-5/6 w-5/6 h-5/6 flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    {/* LEFT */}
                    <div className="w-full h-full flex flex-col items-center justify-center">

                        {/* RIGHT */}
                        <form className="w-full bg-ascent-3 max-w-custom-1 lg:w-1/2 h-full p-10 2xl:px-10 flex flex-col justify-center items-center relative" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col items-center mb-10 ">
                                {/* Replace text with custom logo */}
                                <img src={logoSrc} alt="" style={{ width: '600px', height: '' }} />
                            </div>

                            <TextInput
                                name="email"
                                placeholder="johndoe@johndoe.com"
                                label="Email Address:"
                                type="email"
                                register={register('email', {
                                    required: 'Email Address is required!',
                                })}
                                styles="w-full border rounded-3xl"
                                labelStyle="ml-2 "
                                error={errors.email ? errors.email.message : ' '}
                            />
                            <TextInput
                                name="Password"
                                placeholder="(^=^)"
                                label="Password:"
                                type="password"
                                register={register('password', {
                                    required: 'Password is required!',
                                })}
                                styles="w-full border rounded-3xl"
                                labelStyle="ml-2"
                                error={errors.password ? errors.password.message : ' '}
                            />

                            <div className="mt-2 ml-auto text-right">
                                <Link
                                    to="/reset-password"
                                    className='text-sm text-ascent-2'>
                                    Can't Remember?&nbsp;
                                </Link>
                            </div>
                            {errMsg?.message && (
                                <span className={`text-sm ${errMsg?.status === "failed"
                                        ? "text-[#f64949fe]"
                                        : "text-[#2ba150f2]"
                                    } mt-0.5`}>
                                    {errMsg?.message}
                                </span>
                            )}
                            {isSubmitting ? (
                                <Loading />
                            ) : (
                                <CustomButton
                                    type='submit'
                                    containerStyles={`inline-flex justify-center border-1 border-black max-w-custom-2 rounded-3xl px-2 py-2 text-md font-bold text-black outline-none custom-horizontal-length mt-2`}
                                    title='Explore.'
                                />
                            )}
                            <p className='text-ascent-2 text-sm text-center mt-4'>
                                New around here?
                                <Link 
                                    to='/register'
                                    className='text-ascent-4 font-semibold ml-2 cursor-pointer'
                                >
                                    Create an account!
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
