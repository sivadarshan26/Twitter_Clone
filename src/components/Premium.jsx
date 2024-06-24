// import React from 'react'
import Cric from '../assets/cric.png'
import Robert from '../assets/robert.jpg'
import James from '../assets/james.jpg'
import Rockstar from '../assets/rockstar.jpg'
import { BiSolidBadgeCheck } from "react-icons/bi";


const Premium = () => {
  return (
    <div className="w-[380px] p-2 space-y-3">
        <div className="py-2 h-14 sticky top-0 bg-black">
            <input className="w-full outline-none rounded-full bg-gray-800 h-full px-3 text-white items-center flex" placeholder="Search" />
        </div>
        <div className="p-3 border rounded-lg border-gray-700">
            <p className="text-white text-xl font-bold">Subscribe to Premium</p>
            <p className="text-white pt-2 text-sm">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button id='post' className='mt-3 ml-auto bg-sky-500 py-1.5 px-4 rounded-full font-bold text-white '>
              Subscribe
            </button>
        </div>

        <div className="border rounded-lg border-gray-700 ">
            <p className="text-white text-xl font-bold p-3">What's happening</p>
            <div className='flex hover:bg-white/5 p-3 cursor-pointer'>
                <img src={Cric} className='size-16 rounded-lg' />
                <div className='ml-2'>
                    <p className='text-md font-bold text-white'>West indies vs South Africa</p>
                    <p className='text-gray-500 text-sm'>Cricket • 1hr ago</p>
                </div>
            </div>
            
            <div className='hover:bg-white/5 p-3 cursor-pointer'>
                <p className='text-gray-500 text-sm'>Trending in India</p>
                <p className='text-md font-bold text-white'>Happy Birthday G.O.A.T</p>
                <p className='text-gray-500 text-sm'>2,308 Posts</p>
            </div>

            <div className='hover:bg-white/5 p-3 cursor-pointer'>
                <p className='text-gray-500 text-sm'>Entertainment • Trending</p>
                <p className='text-md font-bold text-white'>#KamalHassan</p>
                <p className='text-gray-500 text-sm'>22.2K Posts</p>
            </div>

            <div className='hover:bg-white/5 p-3 cursor-pointer'>
                <p className='text-gray-500 text-sm'>Entertainment • Trending</p>
                <p className='text-md font-bold text-white'>#ToxicTheMovie</p>
                <p className='text-gray-500 text-sm'>1,763 posts</p>
            </div>

            <div className='hover:bg-white/5 p-3 cursor-pointer'>
                <p className='text-gray-500 text-sm'>Entertainment • Trending</p>
                <p className='text-md font-bold text-white'>Bigg Boss</p>
                <p className='text-gray-500 text-sm'>18.4K posts</p>
            </div>

            <div className='hover:bg-white/5 p-3 cursor-pointer'>
                <p className='text-sky-500'>Show more</p>
            </div>
 
        </div>

        <div className="border rounded-lg border-gray-700 ">
            <p className="text-white text-xl font-bold p-3">Who to follow</p>
            
            <div className='hover:bg-white/5 p-3 cursor-pointer flex'>
                <img src={James} className='rounded-full size-12' /> 
                
                <div className='pl-3'>
                    <p className='text-md font-bold text-white flex items-center'>
                        James cameron
                        <BiSolidBadgeCheck className='ml-2 text-sky-500'/>
                    </p>
                    <p className='text-gray-500 text-sm'>@JimCameron</p>
                </div>    

                <button id='follow' className=' bg-white hover:bg-white/95 ml-auto my-1 px-4 rounded-full font-bold text-black '>
                    Follow
                </button>
                
            </div>

            <div className='hover:bg-white/5 p-3 cursor-pointer flex'>
                <img src={Rockstar} className='rounded-lg size-12' /> 
                
                <div className='pl-3'>
                    <p className='text-md font-bold text-white flex items-center'>
                        Rockstar Support
                        <BiSolidBadgeCheck className='ml-2 text-yellow-500'/>
                    </p>
                    <p className='text-gray-500 text-sm'>@RockstarSupport</p>
                </div>    

                <button id='follow' className=' bg-white hover:bg-white/95 ml-auto my-1 px-4 rounded-full font-bold text-black '>
                    Follow
                </button>
                
            </div>

            <div className='hover:bg-white/5 p-3 cursor-pointer flex'>
                <img src={Robert} className='rounded-full size-12' /> 
                
                <div className='pl-3'>
                    <p className='text-md font-bold text-white flex items-center'>Robert Downey Jr <BiSolidBadgeCheck className='ml-2 text-sky-500'/> </p>
                    <p className='text-gray-500 text-sm'>@RobertDowneyJr</p>
                </div>    

                <button id='follow' className=' bg-white hover:bg-white/95 ml-auto my-1 px-4 rounded-full font-bold text-black '>
                    Follow
                </button>
                
            </div>

            <div className='hover:bg-white/5 p-3 cursor-pointer'>
                <p className='text-sky-500'>Show more</p>
            </div>

        </div>

    </div>
  )
}

export default Premium