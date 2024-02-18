

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { CustomButton, Loading, TextInput } from '../components';
import GreetingMessage from '../components/GreetingMessage';
import useCursorEffect from '../components/cursorEffect';


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  useCursorEffect();
  const onSubmit = async (data) => {
    // Your form submission logic here
  };

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  return (

    <div className="absolute w-full h-screen bg-bg  overflow-scroll items-center justify-center backgroundImage">
      <div className="  sm-hidden  h-screen flex flex-col items-center overflow-scroll">
        <div className="w-full h-screen  flex flex-col items-center ">
          <form
            className="bg-bg max-w-custom-1  h-screen p-10 2xl:px-10 flex flex-col items-center overflow-scroll"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col text-ascent-1 text-6xl bol items-center mb-14 mt-4">
              <GreetingMessage />
            </div>
            <div className='mt-12'></div>
            <TextInput
              name="email"
              placeholder="johndoe@johndoe.com"
              label="Email Address:"
              type="email"
              register={register('email', {
                required: 'Email Address is required!',
              })}
              styles="w-full border borderform hover:bg-secondary rounded-3xl"
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
              styles="w-full border borderform rounded-3xl"
              labelStyle="ml-2"
              error={errors.password ? errors.password.message : ' '}
            />
            <div className="mt-2 ml-auto text-right">
              <Link
                to="/reset-password"
                className="text-sm reg text-ascent-2 "
              >
                Can't Remember?&nbsp;
              </Link>
            </div>
            {errMsg?.message && (
              <span
                className={`text-sm ${errMsg?.status === 'failed'
                    ? 'text-[#f64949fe]'
                    : 'text-[#2ba150f2]'
                  } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}
            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyles={`inline-flex justify-center cursor-pointer focus:outline-none bol border-1 max-w-custom-2 rounded-3xl px-2 py-2 text-md font-bold border-bg bg-ascent-1 text-bg outline-none custom-button-length mt-10 button`}
                title="Explore."
              />
            )}
            <p className="text-ascent-2 text-sm reg text-center mt-4 mb-4">
              New around here?<br></br>
              <Link
                to="/register"
                className="text-ascent-1 text-md bolit ml-2 cursor-pointer"
              >
                Create an account!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Login;
