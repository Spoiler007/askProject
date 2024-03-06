import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import bgimg from '../assets/background.png'
import img1 from '../assets/login.webp'
import SignUp from "./SignUp";


const SignIn = () => {
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

          <h1 className='mx-auto text-4xl mb-10'>Login</h1>

<div className="social-container mx-auto flex gap-7 ">
    <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
        <ImFacebook className="text-xl" />
        {/* <i className="fab fa-facebook-f" /> */}
    </a>
    <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
        <FcGoogle className="text-xl" />
        {/* <i className="fab fa-google-plus-g" /> */}
    </a>
    <a href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
        <TfiLinkedin className="text-xl" />
        {/* <i className="fab fa-linkedin-in" /> */}
    </a>
</div>

          <p className='text-[20px] mx-auto py-5 font-semibold'>- - - - - - Or - - - - - - </p>
                    <form className='flex flex-col gap-7 w-full'>
                        <input type='email' placeholder='nameroll@dept.jgec.ac.in' className='bg-transparent rounded-lg border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400' />
                        <input type='password' placeholder='Password' className='bg-transparent rounded-lg border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400' />
                        <a href="#" className='text-white '>Forgot your password ?</a>
                        <button className='border w-fit mx-auto py-2 px-10 rounded-xl text-xl font-semibold'>Login</button>
                    </form>
                    <div className="py-5">
                        <h1>Dont't have a account ? <a href="/sign-up" className="underline " onClick={<SignUp/>} >Register Now</a></h1>
                    </div>
     
        {/* <p className='text-[20px] py-2 mx-auto font-semibold'>- - - Or Login with - - -</p>
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
        </div> */}
      </div>



    </div>



  </div>
  )
}

export default SignIn;