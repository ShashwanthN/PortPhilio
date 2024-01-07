import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { CustomButton, Loading, TextInput } from '../components';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
    });


    const [errMsg, setErrMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className="bg-primary w-full h-screen flex items-center justify-center">
            <div className=" w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden relative">
                {/* LEFT */}
                <div className=" w-full lg:w-1/2  p-10 2xl:px-20 flex flex-col justify-center">
                    <span className="text-7xl text-ascent-1 font-semibold ">PortPhilio</span>
                    <p className="text-ascent-1 text-base font-semibold">&nbsp;&nbsp;Reach further.</p>
                </div>

                {/* VERTICAL LINE */}
                 <div className="absolute top-1/4 bottom-1/4 left-1/2 transform -translate-x-1/2 w-px bg-ascent-1 border-r-2 border-ascent-1 rounded-xl "></div> 
                
                {/* RIGHT */}
                <div className="w-full lg:w-1/2 p-10 2xl:px-10 flex flex-col justify-center relative">
                    <span className="text-9xl font-semibold mt-4 text-ascent-1 mb-6 transform rotate-90 flex justify-end "></span>
                    <form className="py-8 flex flex-col text-ascent-1 gap-5 items-center">
                        <TextInput
                            name="email"
                            placeholder="johndoe@johndoe.com"
                            label="Email Address:"
                            type="email"
                            register={register('email', {
                                required: 'Email Address is required!',
                            })}
                            styles="w-full border rounded-3xl box-shadow"
                            labelStyle="ml-2"
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
                            styles="w-full border rounded-3xl box-shadow"
                            labelStyle="ml-2 "
                            error={errors.password ? errors.password.message : ' '}
                        />

                        <div className="mt-2 ml-auto text-right"> {/* Adjusted the container for "Can't Remember?" link */}
                            <Link
                                to="/reset-password"
                                className='text-sm text-ascent-2'>
                                Can't Remember?
                            </Link>
                        </div>
                        {errMsg?.message && (
                            <span className={`text-sm ${
                                errMsg?.status === "failed"
                                    ? "text-[#f64949fe]"
                                    : "text-[#2ba150f2]"
                            } mt-0.5` }>
                                {errMsg?.message}
                            </span>
                        )}
                        {isSubmitting ? (
                            <Loading/>
                        ) : (
                            <CustomButton
                                type='submit'
                                containerStyles={`inline flex box-shadow justify-center border-1 border-black rounded-3xl px-2 py-1 text-md font-semibold text-black outline-none custom-horizontal-length mt-2`}
                                title='Explore.'
                            />
                        )}
                    </form>
                    <p className='text-ascent-2 text-sm text-center'>
                        New around here?
                        <Link
                        to='/register'
                        className='text-ascent-2 font-semibold ml-2 cursor-pointer'
                        >
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
