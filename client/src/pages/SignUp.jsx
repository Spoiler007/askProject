import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import bgimg from '../assets/background.png'
import img1 from '../assets/login.webp'
import SignIn from "./SignIn";
import { Alert, Label, Spinner } from "flowbite-react";

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all the fields')
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false);
      if (res.ok) {
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
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

      <div className=' flex h-[90vh] w-[95%] md:w-[60%] md:border-[1px] md:absolute border-white mx-auto'
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


        <div className='sm:px-10 px-5 text-white my-auto mx-auto flex flex-col bg-black/60 h-[89vh] w-[100%] sm:w-[500px]  xl:w-[500px] xl:relative absolute '>
          <p className='self-center py-5  whitespace-nowrap text-sm sm:text-xl xl:text-2xl font-semibold dark:text-white'>
            ask
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-700 to-cyan-500 rounded-lg text-white'>Project</span>
          </p>
          <h1 className='mx-auto text-3xl mb-4 '>Create Account</h1>
          <form className='flex flex-col gap-2  w-full mx-auto' onSubmit={handleSubmit}>
            <Label value='Username' className="text-gray-300 font-mono text-md" />
            <input required onChange={handleChange} id="username" type='text' placeholder='Username' className=' rounded-lg bg-transparent border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400 ' />
            <Label value='Email' className="text-gray-300 font-mono text-md" />
            <input required onChange={handleChange} id="email" type='email' placeholder='az1234@dept.jgec.ac.in ' className='bg-transparent rounded-lg border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400' />
            <Label value='Password' className="text-gray-300 font-mono text-md" />
            <input required onChange={handleChange} id="password" type='password' placeholder='Password' className='bg-transparent rounded-lg border py-2 px-5 outline-none placeholder:text-gray-400 border-gray-400' />
            <button className='border w-fit mx-auto py-2 mt-5 px-10 rounded-xl text-xl font-semibold hover:bg-cyan-900/60 '
              // disabled={submitButtondisable}  onClick={handleSubmission}
              disabled={loading}
            >
              {
                loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className="pl-3">Loading....</span>
                  </>
                ) : 'Register'
              }
            </button>
          </form>

          <span className="flex text-center gap-2">Have a account ? <Link to="/sign-in" className="underline" onClick={<SignIn />}> Click Here</Link></span>
          <p className='text-[20px] py-2 mx-auto font-semibold'>- - - Or Login with - - -</p>
          <div className="social-container mx-auto mt-4 flex gap-7">
            <Link to="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <ImFacebook className="text-xl" />

            </Link>
            <Link href="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <FcGoogle className="text-xl" />

            </Link>
            <Link to="#" className="social border h-fit w-fit p-2 rounded-[50%] hover:bg-black/20 ">
              <TfiLinkedin className="text-xl" />

            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color='failure'>
              {errorMessage}
            </Alert>
          )
          }
        </div>



      </div>



    </div>

  )
}

export default SignUp;