import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useForm } from 'react-hook-form';
import { CustomButton, Loading, TextInput } from '../components';
import backgroundImage from '../assets/background.jpg'; // Replace with the actual path to your image

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
        <div className="relative bg-primary w-full h-screen flex items-center justify-center">
            
            {/* Image */}
            <img
                src={backgroundImage}
                alt="Background"
                className="absolute   w-3/4 h-4/5 object-cover z-0"
            
></img>
            {/* Container for all content */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                {/* LEFT */}

                {/* RIGHT */}
                <div className="w-full md:w-2/3 h-full 2xl:h-5/6 py-8 lg:py-0 bg-opacity-0 flex bg-primary rounded-xl overflow-hidden relative flex-col items-center justify-center">
                

                <div className="flex flex-col items-center mb-6 text-white">
                    <span className="transition-font-size text-7xl md:text-5xl lg:text-7xl font-semibold mb-2">PortPhilio</span>
                    <p className="text-base font-semibold">&nbsp;&nbsp;Reach further.</p>
                </div>
                    <form className="w-full lg:w-1/2 p-10 2xl:px-10 flex flex-col items-center">
                        <TextInput
                            name="email"
                            placeholder="johndoe@johndoe.com"
                            label="Email Address:"
                            type="email"
                            register={register('email', {
                                required: 'Email Address is required!',
                            })}
                            styles="w-full border rounded-3xl"
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
                            styles="w-full border rounded-3xl "
                            labelStyle="ml-2 "
                            error={errors.password ? errors.password.message : ' '}
                        />

                        <div className="mt-2 ml-auto text-right">
                            <Link
                                to="/reset-password"
                                className='text-sm text-white'>
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
                                containerStyles={`inline-flex justify-center border-1 border-black rounded-3xl px-2 py-2 text-md font-semibold text-black outline-none custom-horizontal-length mt-2`}
                                title='Explore.'
                            />
                        )}
                    </form>
                    
                    <div className="absolute top-1/4 left-0 w-full h-full bg-black opacity-50">
                </div>
                
            </div>
           
            </div>
            
            
        </div>
    );
};

export default Login;
