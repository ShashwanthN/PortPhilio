import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { CustomButton, Loading, TextInputregister } from '../components';
import paper1 from '../assets/5.png';
import './Register.css';
import GlowingEffect from '../components/GlowingEffect'; // Adjust the path as needed
import Spline from '@splinetool/react-spline';
const Register = () => {
   
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    // Add your form submission logic here
  };

  const [errMsg, setErrMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="absolute animated-gradient w-full h-full  flex overflow-auto">
      {/* LEFT */}
      <div className="left-column hideleft bgleft">
        <img src={paper1} alt="" className="paper-image bottom-0" />
        <div className='brand-text'>
          <span className="brand-text-start bol lg:text-7xl md:text-5xl sm:text-3xl">./PortPhilio</span>
         
          <span className="brand-text-end bol lg:text-7xl md:text-5xl sm:text-3xl">PortPhilio/.</span>
        </div>
        <div className='text-container'>
        <Spline scene="https://prod.spline.design/cVhYlis2QUzdk3S4/scene.splinecode" />
        
      </div>
      </div>


      {/* RIGHT */}
      <form
        className="flex-1 items-end bg-ascent-1  overflow-scroll max-w-custom-1 p-10 2xl:px-10 h-full flex flex-col static items-end"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" w-full items-start mb-10">
          <div className=" justify-content-start top-0 left-0 mt-4 ml-0">
            <span className="transition-font-size text-4xl md:text-4xl lg:text-5xl text-bg bol ml- animation-text">t/Welcome...</span>
          </div>
        </div>
        <div className="flex flex-col w-full items-center h-full mb-10">
          <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2 mt-10 mb-4'>
            <TextInputregister
              name="firstname"
              placeholder="john"
              label="./First Name/."
              type="text"
              register={register('firstname', {
                required: 'First name is required!',
              })}
              styles="w-full border rounded-3xl"
              error={errors.firstname ? errors.firstname.message : ' '}
            />
            <TextInputregister
              name="lastname"
              placeholder="Doe"
              label="./Last Name/."
              type="text"
              register={register('lastname', {
                required: 'Last name is required!',
              })}
              styles="w-full border rounded-3xl"
              error={errors.lastname ? errors.lastname.message : ' '}
            />
          </div>

          <TextInputregister
            name="Email Adress"
            placeholder="johndoe@johndoe.com"
            label="./Email Address/."
            type="email"
            register={register('email', {
              required: 'Email Address is required!',
            })}
            styles="w-full border rounded-3xl"
            labelStyle="ml-2 "
            error={errors.email ? errors.email.message : ' '}
          />
          <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2 mt-4'>
            <TextInputregister
              name="Password"
              placeholder="(^=^)"
              label="./Password/."
              type="password"
              register={register('password', {
                required: 'Password is required!',
              })}
              styles="w-full border rounded-3xl"
              labelStyle="ml-2"
              error={errors.password ? errors.password.message : ' '}
            />
            <TextInputregister
              name="confirm Password"
              placeholder="(^=^)"
              label="./Confirm Password/."
              type="password"
              register={register('cPassword', {
                validate: (value) => {
                  const { password } = getValues();
                  if (password !== value) {
                    return 'Not a match!';
                  }
                },
              })}
              styles="w-full border rounded-3xl"
              labelStyle="ml-2"
              error={errors.cPassword && errors.cPassword.type === 'validate' ? errors.cPassword?.message : ''}
            />
          </div>

          {errMsg?.message && (
            <span className={`text-sm ${errMsg?.status === 'failed' ? 'text-[#f64949fe]' : 'text-[#2ba150f2]' } mt-0.5`}>
              {errMsg?.message}
            </span>
          )}
          {isSubmitting ? (
            <Loading />
          ) : (
            
              <GlowingEffect
                type='submit'
                containerStyles={`inline-flex justify-center border-1 mt-4 border-bg bg-bg text-bg2 max-w-custom-2 rounded-3xl py-2 text-md bol text-black outline-none custom-button-length mt-2 button`}
                title='  Register/.'
              />
            
          )}
          <p className='text-bg2 text-sm reg text-center mt-4 pb-5' >
            Already registered?
            <Link
              to='/register'
              className='text-bg2 bol ml-2 cursor-pointer '
            >
              Login!
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
