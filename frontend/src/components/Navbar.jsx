import React from 'react';
import logo from '../assets/mylogo.jpg';
import { Link } from 'react-router-dom';
import { useUserContext } from '../Usercontext';
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsHouse } from 'react-icons/bs';
import { GiHamburgerMenu } from "react-icons/gi";
import { GiFastNoodles } from 'react-icons/gi';
import { BsBookmarkCheckFill } from 'react-icons/bs';
import { AiOutlineLogin } from 'react-icons/ai';
import { AiOutlineLogout } from 'react-icons/ai';
export default function Navbar() {
  let { username } = useUserContext();

  if (username && username.length > 6) {
    username = username.slice(0, 6) + '...';
  }
  const [isOpen, setIsOpen] = useState(false);

  const sideList = [
    {
      path: "/",
      icon: <AiOutlineHome className="text-2xl mr-2" />,
      title: "Home",
    },
    {
      path: "/about",
      icon: <BsHouse className="text-2xl" />,
      title: "About Us",
    },
    {
      path: "/Menu",
      icon: <GiFastNoodles className="text-2xl" />,
      title: "Menu",
    },
    {
      path: "/bookslot",
      icon: <BsBookmarkCheckFill className="text-2xl" />,
      title: "Book A Slot",
    },
  ];

  const navList = [
    {
      path: "/",
      icon: <AiOutlineHome className="text-2xl mr-2" />,
      title: "Home",
    },
    {
      path: "/about",
      icon: <BsHouse className="text-2xl" />,
      title: "About Us",
    },
    {
      path: "/Menu",
      icon: <GiFastNoodles className="text-2xl" />,
      title: "Menu",
    },
    {
      path: "/bookslot",
      icon: <BsBookmarkCheckFill className="text-2xl" />,
      title: "Book A Slot",
    },
  ];

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  useEffect(() => {
    const handleEscKeyPress = (e) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);
  return (
    <>
      <nav className="flex  w-full items-center justify-between px-6 h-16 bg-white text-gray-700 border-b border-gray-200 z-10">
        <div className="flex items-center">
          <button className="mr-2" aria-label="Open Menu" onClick={handleDrawer}>
            <GiHamburgerMenu className="text-3xl" />
          </button>

          <img
            src={logo}
            alt="Logo"
            className="h-auto w-10"
          /> <p className='font-extrabold text-lg ml-2' style={{ fontFamily: 'Oxygen' }}>Dailycious</p>
        </div>

        <div className="flex items-center">
          <div className="hidden md:flex md:justify-between md:bg-transparent">
            {navList.map(({ path, icon, title }, index) => (
              <Link to={path} key={index}>
                <button
                  title="Wishlist"
                  className="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  <span>{icon}</span>
                  <span>{title}</span>
                </button>
              </Link>
            ))}
            {username ? (
              <>
                <div className="h-10 relative w-10 overflow-hidden rounded-full">
                  <img
                    className="object-cover h-full w-full rounded-full"
                    src="https://th.bing.com/th/id/OIP.0H2FBvCT-goHME7xb5eWEQHaHa?pid=ImgDet&rs=1"
                    alt="profilepic"
                  />
                </div>
                <span className="flex items-center p-3 font-medium mr-2 text-center" style={{ fontFamily: 'Oxygen' }}>
                  Welcome, {username}!
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                > <span><AiOutlineLogout className='text-2xl' /></span>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button
                  className="flex items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                > <span><AiOutlineLogin className="text-2xl" /></span>
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>


        {isOpen && (
          <div className="z-10 fixed inset-0 transition-opacity">
            <div
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black opacity-50"
              tabIndex={0}
            ></div>
          </div>
        )}

        <aside
          className={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <span className="flex w-full items-center p-4 border-b">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-12 mx-auto"
            /><p className='font-extrabold mr-10' style={{ fontFamily: 'Oxygen' }}>Dailycious</p>
          </span>
          {sideList.map(({ path, icon, title }, index) => {
            return (
              <Link to={path} key={index}>
                <span
                  key={index}
                  className="flex items-center p-4 hover:bg-pink-500 hover:text-white "
                >
                  <span className="mr-2">{icon}</span> <span>{title}</span>
                </span>
              </Link>
            );
          })}
          {username && (
            <>
              <div className="h-10 relative w-10 overflow-hidden rounded-full">
                <img
                  className="object-cover h-full w-full rounded-full"
                  src="https://th.bing.com/th/id/OIP.0H2FBvCT-goHME7xb5eWEQHaHa?pid=ImgDet&rs=1"
                  alt="profilepic"
                />
              </div>
              <span className="flex items-center p-3 font-medium mr-2 text-center" style={{ fontFamily: 'Oxygen' }}>
                Welcome, {username}!
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center p-4 hover:bg-pink-500 hover:text-white w-full "
              > <span><AiOutlineLogout className='text-2xl' /></span>
                Logout
              </button>
            </>
          )}
          {!username && (
            <Link to="/login">
              <button
                className="flex w-full items-center p-4 hover:bg-pink-500 hover:text-white "
              > <span><AiOutlineLogin className="text-2xl" /></span>
                Login
              </button>
            </Link>
          )}
        </aside>



      </nav>
    </>
  );
}
