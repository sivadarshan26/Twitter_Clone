import { useState } from 'react';
import { GoHome , GoSearch, GoHomeFill} from "react-icons/go";
import { FaBell, FaRegBell, FaEnvelope,FaRegEnvelope, FaBookmark, FaRegBookmark,FaXTwitter } from "react-icons/fa6";
import { FaListAlt, FaRegListAlt, FaFeatherAlt } from "react-icons/fa";
import { LuSquareSlash } from "react-icons/lu";
import { BsSlashSquareFill } from "react-icons/bs";
import { HiUsers, HiOutlineUsers, HiOutlineUser, HiUser   } from "react-icons/hi2";
import { CgMoreO } from "react-icons/cg";




const Sidebar = () => {
  const [active, setActive] = useState('home');

  const handleClick = (section) => {
    setActive(section);
  };

  const items = [
    { name: 'Home', href: '#home', id: 'home', icon: <GoHome />, activeIcon: <GoHomeFill /> },
    { name: 'Explore', href: '#explore', id: 'explore', icon: <GoSearch />, activeIcon: <GoSearch /> },
    { name: 'Notifications', href: '#notifications', id: 'notifications', icon: <FaRegBell />, activeIcon: <FaBell /> },
    { name: 'Messages', href: '#messages', id: 'messages', icon: <FaRegEnvelope />, activeIcon: <FaEnvelope /> },
    { name: 'Grok', href: '#grok', id: 'grok', icon: <LuSquareSlash />, activeIcon: <BsSlashSquareFill /> },
    { name: 'Lists', href: '#lists', id: 'lists', icon: <FaRegListAlt />, activeIcon: <FaListAlt /> },
    { name: 'Bookmarks', href: '#bookmarks', id: 'bookmarks', icon: <FaRegBookmark />, activeIcon: <FaBookmark /> },
    { name: 'Communities', href: '#communities', id: 'communities', icon: <HiOutlineUsers />, activeIcon: <HiUsers /> }, 
    { name: 'Premium', href: '#premium', id: 'premium', icon: <FaXTwitter />, activeIcon: <FaXTwitter /> },
    { name: 'Profile', href: '#profile', id: 'profile', icon: <HiOutlineUser />, activeIcon: <HiUser /> },
    { name: 'More', href: '#more', id: 'more', icon: <CgMoreO />,activeIcon: <CgMoreO /> },
  ];

  return (
        <div className="w-64 bg-black h-screen p-4">
            <div className='my-2.5 ml-1.5 py-2.5 px-3 hover:rounded-full hover:bg-white/10 w-fit'>
                <FaXTwitter className='text-white '/>
    </div>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id} className='w-fit text-xl'>
                <a
                  href={item.href}
                  onClick={() => handleClick(item.id)}
                  className={`flex items-center py-2.5 px-4 rounded-full hover:bg-white/10 text-white ${
                    active === item.id ? 'font-bold' : ''
                  }`}
                >
                  <span className="mr-4">
                    {active === item.id ? item.activeIcon : item.icon}
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex my-2.5  py-2.5 px-3 rounded-full bg-sky-500 w-auto text-white text-xl items-center cursor-pointer'>
                <FaFeatherAlt className=''/>
                <p className='pl-3'>Post</p>
          </div>
        </div>
      
  );
};

export default Sidebar;
