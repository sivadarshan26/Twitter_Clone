import { useState } from 'react';
import avatar from '../assets/avatar (3).jpg';
import { MdOutlinePhoto, MdOutlineGifBox } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";


const Home = () => {
  const [activeTab, setActiveTab] = useState('For You');
  const [activeIcon, setActiveIcon] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const handleHover = (icon) => {
    setActiveIcon(icon);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const elements = [
    { href: '#photo', id: 'photo', icon: <MdOutlinePhoto /> },
    { href: '#gif', id: 'gif', icon: <MdOutlineGifBox /> },
    { href: '#list', id: 'list', icon: <CiCircleList /> },
    { href: '#messages', id: 'messages', icon: <VscSmiley /> },
    { href: '#calendar', id: 'calendar', icon: <TbCalendarTime /> },
    { href: '#location', id: 'location', icon: <IoLocationOutline /> },
  ];

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
          <input 
            className='ml-4 bg-inherit outline-none text-white text-xl' 
            placeholder='What is happening?!' 
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        
        {inputValue && (
          <a id='everyone' className='text-sky-500 flex items-center gap-2 ml-[52px] hover:bg-sky-500/10 py-1 px-3 rounded-full w-fit cursor-pointer'>
            <FaGlobeAmericas />Everyone can reply
          </a>
        )}
        
        <hr className='mt-5 ml-16 border-gray-700'/>
        
        <div className='flex ml-16'>
          {elements.map((item) => (
            <div 
              key={item.id}
              className={`mt-4 p-2 rounded-full hover:bg-sky-500/10 w-fit text-sky-500 ${activeIcon === item.id ? 'bg-sky-500/10' : ''}`}
              onMouseEnter={() => handleHover(item.id)}
              onMouseLeave={() => handleHover('')}
            >
              <a href={item.href} className='text-xl'>
                {item.icon}
              </a>
            </div>
          ))}
          <div className='flex ml-auto mt-4 mr-2 gap-4'>
          {inputValue && (
          <div className='flex gap-4'>  
          <hr className='h-auto border-[0.2px] border-gray-700' />  

          <a id='plus' className= 'flex items-center px-2 rounded-full font-semibold text-sky-500 border-[0.3px] border-gray-700 cursor-pointer hover:bg-sky-500/10'>
            <FiPlus  className='size-5 '/>
          </a>
          </div>
        )}
        
          <button id='post' className='ml-auto bg-sky-500 py-1.5 px-4 rounded-full font-semibold text-white'>
            Post
          </button>
          </div>
        </div>
      </div>
    </> 
  );
};

export default Home;
