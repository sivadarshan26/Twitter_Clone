// import React from 'react';
import avatar1 from '../assets/avatar (1).jpg';
import avatar2 from '../assets/avatar (2).jpg';
import avatar3 from '../assets/avatar (3).jpg';
import avatar4 from '../assets/avatar (4).jpg';
import avatar5 from '../assets/avatar (5).jpg';
import book from '../assets/postpic/book.png';
import coffee from '../assets/postpic/coffee.png';
import morning from '../assets/postpic/morning.png';
import newjob from '../assets/postpic/newjob.jpg';
import sunset from '../assets/postpic/sunset.jpg';
import { useState } from 'react';
import avatar from '../assets/avatar (3).jpg';
import { MdOutlinePhoto, MdOutlineGifBox } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { VscSmiley } from "react-icons/vsc";
import { TbCalendarTime } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import './Posts.css'



const Posts = () => {

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



  const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];
  const images = { morning, coffee, sunset, newjob, book };

  // Function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the avatars array
  const shuffledAvatars = shuffleArray([...avatars]);

  // Select the first 5 elements from the shuffled array
  const randomAvatars = shuffledAvatars.slice(0, 5);

  // Define array of objects with names and users
  const ids = [
    { name: "John Smith", user: "@johnsmith • 14h" },
    { name: "James Johnson", user: "@jamesjohnson • 43m" },
    { name: "David Brown", user: "@davidbrown • 1d" },
    { name: "Michael Wilson", user: "@michaelwilson • 21h" },
    { name: "Robert Davis", user: "@robertdavis • 26m" }
  ];

  const msg = [
    { imgid: "morning", msg: "Good morning, everyone! 🌞 How's your day starting off?", hashtags: "#GoodMorning | #MondayMotivation" },
    { imgid: "coffee", msg: "Just tried the new coffee shop in town, and it's amazing! ☕️", hashtags: "#CoffeeTime | #LocalBusiness | #CoffeeLovers" },
    { imgid: "sunset", msg: "Check out this beautiful sunset from my evening walk. 🌅", hashtags: "#Sunset | #NatureLovers | #EveningWalk" },
    { imgid: "newjob", msg: "Excited to start my new job today! Wish me luck! 🤞", hashtags: "#FirstDay | #NewBeginnings | #CareerGoals" },
    { imgid: "book", msg: "What's everyone reading this weekend? 📚", hashtags: "#ReadingTime | #WeekendVibes | #BookLovers | #BookRecommendations" }
  ];

  return (
    <div className=''>
    
      <div id='fixed' className="sticky top-0 flex w-full justify-between  text-lg h-14 border-x border-b border-gray-700 ">
        <div
          className={`flex justify-center w-full py-2 cursor-pointer blur-background hover:bg-gray-900/90
            ${activeTab === 'For You' ? 'text-white font-semibold' : 'text-gray-400'}`}
          onClick={() => handleClick('For You')}
        >
          <p 
            className={`pb-11 ${activeTab === 'For You' ? 'border-b-4 border-b-sky-500 ' : ''}`}>For You</p>
        </div>
        <div
          className={`flex justify-center w-full py-2 cursor-pointer blur-background hover:bg-gray-900/90
            ${activeTab === 'Following' ? 'bg-black text-white font-semibold' : ' text-gray-400'}`}
          onClick={() => handleClick('Following')}
        >
          <p  
            className={`pb-11 ${activeTab === 'Following' ? 'border-b-4 border-b-sky-500 ' : ''}`}
          >Following</p>
        </div>
      </div>

      <div id='scrolable' className='bg-black  p-5 border border-t-0 border-gray-700 overflow-y-auto'>
        <div className='flex'>
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
    

    <div className="flex flex-col bg-black">
      {randomAvatars.map((avatar, index) => (
        <div className="flex border border-t-0 border-gray-700 p-3" key={index}>
          <div id='avatar'>
            <img
              src={avatar}
              alt="profilePic"
              className='rounded-full h-12 w-12 object-cover'
            />
          </div>
          <div className='ml-3 flex flex-col'>
            <div className='flex items-center'>
              <p className='text-white font-semibold'>{ids[index].name}</p>
              <p className='text-gray-700 pl-2'>{ids[index].user}</p>
            </div>
            <div id="msgBlock" className='mt-2'>
              <p id="msg" className='text-white'>{msg[index].msg}</p>
              <p id="hashtags" className='text-sky-500 mt-3'>{msg[index].hashtags}</p>
              <img id="imgId" src={images[msg[index].imgid]} alt={msg[index].imgid} className='mt-3 rounded-md object-cover w-full max-w-xs'/>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Posts;
