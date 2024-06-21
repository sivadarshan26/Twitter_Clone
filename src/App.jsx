// import { useState } from 'react'
import './App.css'
import logo from '../src/assets/logo.svg'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


function App() {
  

  return (
    <>
    <div className='h-screen'>
      <div className='flex items-center justify-center h-full gap-64'>
        <div id='left' className=''>
          <img src={logo} />
        </div>

        <div id='right' className=''>
          <p className='font-bold text-6xl text-white pb-10 merriweather-sans'>Happening now</p>
          <p className='font-bold text-3xl text-white pb-10'>join today.</p>
          
          <div className='flex flex-col gap-3 w-[300px]'>  
          <span className='rounded-full bg-white font-semibold py-2 flex items-center justify-center'> 
            <FcGoogle className='size-[27px] pr-2'/>Sign up with Apple</span>
          <span className='rounded-full bg-white font-semibold py-2 flex items-center justify-center'> <FaApple className='size-[24px] pr-2'/>Sign up with Apple</span>
            <div className='flex items-center'>
              <hr className='w-full h-[0.3px] bg-gray-700 border-none' />
              <span className='px-2 text-white'>or</span>
              <hr className='w-full h-[0.3px] bg-gray-700 border-none' />
            </div>
            <button className='rounded-full bg-[#0099EB] font-semibold py-2 text-white'> Create account</button>
            
            <p className='text-[#696e74] text-xs '>By signing up, you agree to the 
              <span className='text-[#006BB0]'> Terms of Service </span>
              and 
              <span className='text-[#006BB0]'> Privacy Policy </span>, including 
              <span className='text-[#006BB0]'> Cookie Use </span>.
            </p>

            <p className='font-bold text-lg text-white mt-[40px]'>Already have an account?</p>
            <button className='rounded-full border-[0.5px] border-white font-semibold py-2 text-[#0099EB] mt-2'> Sign in</button>
          </div>
        </div>
        
      </div>
      <div className="text-xs text-gray-400 flex flex-wrap justify-center space-x-2 sm:space-x-4 lg:space-x-6 absolute bottom-0 px-10 pb-3">
        <a href="/about" className="my-1">About</a>
        <a href="/download" className="my-1">Download the X app</a>
        <a href="/help-center" className="my-1">Help Center</a>
        <a href="/terms-of-service" className="my-1">Terms of Service</a>
        <a href="/privacy-policy" className="my-1">Privacy Policy</a>
        <a href="/cookie-policy" className="my-1">Cookie Policy</a>
        <a href="/accessibility" className="my-1">Accessibility</a>
        <a href="/ads-info" className="my-1">Ads info</a>
        <a href="/blog" className="my-1">Blog</a>
        <a href="/careers" className="my-1">Careers</a>
        <a href="/brand-resources" className="my-1">Brand Resources</a>
        <a href="/advertising" className="my-1">Advertising</a>
        <a href="/marketing" className="my-1">Marketing</a>
        <a href="/business" className="my-1">X for Business</a>
        <a href="/developers" className="my-1">Developers</a>
        <a href="/directory" className="my-1">Directory</a>
        <a href="/settings" className="my-1">Settings</a>
        <span className="my-1">© 2024 X Corp.</span>
      </div>
      </div>
    </>
  )
}

export default App
