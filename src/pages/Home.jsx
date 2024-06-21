import { useState } from 'react';
import avatar from '../assets/avatar (3).jpg';
import { MdOutlinePhoto,MdOutlineGifBox  } from "react-icons/md";


const Home = () => {
  const [activeTab, setActiveTab] = useState('For You');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <div className="flex w-full justify-between text-lg h-14 border-x border-b border-gray-700 ">
      <div
        className={`flex justify-center w-full py-2 cursor-pointer bg-black hover:bg-black/90
            ${activeTab === 'For You' ? 'text-white font-semibold' : 'text-gray-400'}`}
        onClick={() => handleClick('For You')}
      >
        <p 
          className={`pb-11 ${activeTab === 'For You' ? 'border-b-4 border-b-sky-500 ' : ''}`}>For You</p>
      </div>
      <div
        className={`flex justify-center w-full py-2 cursor-pointer bg-black hover:bg-black/90
            ${activeTab === 'Following' ? 'bg-black text-white font-semibold' : ' text-gray-400'}`}
        onClick={() => handleClick('Following')}
      >
        <p  
         className={`pb-11 ${activeTab === 'Following' ? 'border-b-4 border-b-sky-500 ' : ''}`}
       >Following</p>
      </div>
    </div>

    <div className='bg-black w-auto p-5 border border-t-0 border-gray-700'>
        <div className='flex '>
            <img src={avatar} className='size-12 rounded-full'/>
            <input className='ml-4 bg-inherit outline-none text-white text-xl' placeholder='What is happening?!'/>
        </div>
        <hr className='mt-5 ml-16 border-gray-700'/>
        <div className= 'ml-16 '>
          <div className='mt-4 p-2 rounded-full hover:bg-sky-500/10 w-fit flex '>
            <MdOutlinePhoto className='size-6 text-sky-500'/>
            <MdOutlineGifBox className='size-6 text-sky-500'/>
          </div>  
        </div>
        
    </div>
             
    </> 
  );
};

export default Home;
