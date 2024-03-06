import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import bgimg from '../assets/background.png'
import img1 from '../assets/login.webp'
import SignIn from "./SignIn";

const SignUp = () => {
  return (
    <div className='relative ' >
      <img
        src={bgimg}
        fill={true}
        alt={"Background Image"}
        className='w-full  h-[100vh] blur-sm'
      />

      <div className=' flex h-[86vh] w-[95%] md:w-[60%] md:border-[1px] md:absolute border-white mx-auto'
        style={{
          position:"absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <img src={img1} alt='' className=' w-[100%] sm:w-[500px] relative' />
        {/* <Validation /> */}

        {/* <Login/> */}
        {/* <Signup/> */}


        <div className='sm:px-10 px-5 text-white my-auto mx-auto flex flex-col bg-black/60 h-[85vh] w-[100%] sm:w-[500px]  xl:w-[500px] xl:relative absolute '>
        <p className='self-center py-5  whitespace-nowrap text-sm sm:text-xl xl:text-2xl font-semibold dark:text-white'>
                ask
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-700 to-cyan-500 rounded-lg text-white'>Project</span>
            </p>
          <h1 className='mx-auto text-4xl mb-5 pt-5'>Create Account</h1>
          <form className='flex flex-col gap-7 py-5 w-full mx-auto'>
            <input required onchange={(event) => setValues((prev) => ({ ...prev, name: event.event.target.value }))} type='text' placeholder='Username' className=' rounded-lg bg-transparent border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400 ' />
            <input required onchange={(event) => setValues((prev) => ({ ...prev, email: event.event.target.value }))} type='email' placeholder='Email ( az1234@dept.jgec.ac.in )' className='bg-transparent rounded-lg border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400' />
            <input required onchange={(event) => setValues((prev) => ({ ...prev, password: event.event.target.value }))} type='password' placeholder='Password' className='bg-transparent rounded-lg border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400' />
            <button className='border w-fit mx-auto py-2 px-10 rounded-xl text-xl font-semibold hover:bg-cyan-900/60 active:animate-pulse'
            // disabled={submitButtondisable}  onClick={handleSubmission}
            >
              Register
            </button>
          </form>

          <span className="flex text-center gap-2">Have a account ?  <a href="/sign-in" className="underline" onClick={<SignIn/>}> Click Here</a></span>
          <p className='text-[20px] py-2 mx-auto font-semibold'>- - - Or Login with - - -</p>
          <div className="social-container mx-auto mt-4 flex gap-7">
            <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <ImFacebook className="text-xl" />

            </a>
            <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <FcGoogle className="text-xl" />

            </a>
            <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <TfiLinkedin className="text-xl" />

            </a>
          </div>
        </div>



      </div>



    </div>

  )
}

export default SignUp;