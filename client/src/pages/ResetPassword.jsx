import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Loading, TextInput, CustomButton } from '../components';

const ResetPassword = () => {
  //const theme = useSelector((state) => state.theme.theme);
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  //const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {};

    return (
    <div className="w-full h-[100vh] bg-bg flex items-center justify-center p-6">
      <div className='bg-bg border-2 border-ascent-1 border-dashed w-full md:w-1/3 2xl:w-1/4 px-6 py-8 shadow-md '>
        <p className='text-ascent-1 text-xl bol font-semibold'>Reset Password</p>
        <span className='text-sm reg text-ascent-2'>
          Verfication needed! /.You will recieve a mail./
        </span>
        <form onSubmit={handleSubmit(onsubmit)}
        className='py-4 flex flex-col bol items-center gap-5'>
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
            {errMsg?.message && (
              <span
              role='alert'
                className={`text-sm ${
                  errMsg?.status === "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150f2]"
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
                containerStyles={`inline-flex justify-center bol border-1 border-black max-w-custom-2 rounded-3xl px-2 py-2 text-md font-bold border-bg2 bg-ascent-1 text-bg outline-none custom-button-length mt-10`}
                title="Explore."
              />
            )}

        </form>
      </div>

    </div>
    )  
};

export default ResetPassword