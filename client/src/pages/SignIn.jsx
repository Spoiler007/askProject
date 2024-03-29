import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import bgimg from '../assets/background.png'
import img1 from '../assets/login.webp'
import SignUp from "./SignUp";
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Label, Spinner } from "flowbite-react";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";



const SignIn = () => {

  const [formData, setFormData] = useState({})
  const { loading, error: errorMessage } = useSelector(state => state.user)
  // const [errorMessage, setErrorMessage] = useState(null)
  // const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      // setLoading(true);
      // setErrorMessage(null);
      dispatch(signInStart());

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // return setErrorMessage(data.message)
        dispatch(signInFailure(data.message));
      }
      // setLoading(false);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      // setErrorMessage(error.message);
      // setLoading(false);
      dispatch(signInFailure(error.message));

    }
  }


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
          position: "absolute",
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
          <p className='self-center py-3  whitespace-nowrap text-sm sm:text-xl xl:text-2xl font-semibold dark:text-white'>
            ask
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-700 to-cyan-500 rounded-lg text-white'>Project</span>
          </p>

          <h1 className='mx-auto text-4xl mb-5'>SignIn</h1>

          <div className="social-container mx-auto flex gap-7 ">
            <Link to="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <ImFacebook className="text-xl" />
            </Link>
            <Link to="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <FcGoogle className="text-xl" />
            </Link>
            <Link to="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <TfiLinkedin className="text-xl" />
            </Link>
          </div>

          <p className='text-[20px] mx-auto py-2 font-semibold'>- - - - - - Or - - - - - - </p>
          <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
            <Label value='Email' className="text-gray-300 font-mono text-md" />
            <input required onChange={handleChange} id="email" type='email' placeholder='nameroll@dept.jgec.ac.in' className='bg-transparent rounded-lg border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400' />
            <Label value='Password' className="text-gray-300 font-mono text-md" />
            <input required onChange={handleChange} id="password" type='password' placeholder='* * * * * * * * *' className='bg-transparent rounded-lg border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400' />
            <a href="#" className='text-white '>Forgot your password ?</a>
            <button className='border w-fit mx-auto py-2 px-10 rounded-xl text-xl font-semibold'>Login</button>
          </form>

          {errorMessage && (
            <Alert className="mt-5" color='failure'>
              {errorMessage}
            </Alert>
          )
          }

          <div className="py-5">
            <h1>Dont't have a account ? <a href="/sign-up" className="underline " onClick={<SignUp />} >Register Now</a></h1>
          </div>


        </div>



      </div>



    </div>
  )
}

export default SignIn;