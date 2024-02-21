
import { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { BsBookmarkCheckFill, BsHouse } from 'react-icons/bs';
import { FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';
import { GiFastNoodles, GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useUserContext } from '../Usercontext';
import logo from '../assets/mylogo.jpg';
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
      title: "About",
    },
    {
      path: "/Menu",
      icon: <GiFastNoodles className="text-2xl" />,
      title: "Menu",
    },
    {
      path: "/bookslot",
      icon: <BsBookmarkCheckFill className="text-2xl" />,
      title: "Book",
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
      title: "About",
    },
    {
      path: "/Menu",
      icon: <GiFastNoodles className="text-2xl" />,
      title: "Menu",
    },
    {
      path: "/bookslot",
      icon: <BsBookmarkCheckFill className="text-2xl" />,
      title: "Book",
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
          <button className="sm:hidden mr-2" aria-label="Open Menu" onClick={handleDrawer}>
            <GiHamburgerMenu className="text-3xl" />
          </button>

          <img
            src={logo}
            alt="Logo"
            className="block sm:h-auto w-10 ml-10"
          /> <p className='ml-2 font-extrabold text-xl' style={{ fontFamily: 'Oxygen' }}>Dailycious</p>
          <span><div className="border border-gray-300 h-8 ml-5"></div></span></div>

        <div className="hidden md:flex md:justify-between md:bg-transparent -ml-[140px]">
          <select
            name="location"
            id="location"
            className="mt-4 appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="" disabled selected>
              Setup your current Location
            </option>
            <option
              value="gps"
            >
              <FaLocationArrow className="inline-block mr-2" /> Use GPS
            </option>
          </select>
          <div className="flex flex-row-reverse items-center px-2 py-3 text-gray-700">
            <FaMapMarkerAlt />
          </div>
        </div>


        <div className="flex items-center">
          <div className="hidden md:flex md:justify-between md:bg-transparent">
            {navList.map(({ path, icon, title }, index) => (
              <Link to={path} key={index}>
                <button
                  title={`${title}`}
                  className="flex items-center p-3 font-medium mr-5 text-center bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                >
                  <span>{icon}</span>
                  <span>{title}</span>
                </button>
              </Link>
            ))}
            {username ? (
              <>
                <div className="h-10 w-10 overflow-hidden rounded-full">
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
                  className="flex w-40 h-12 items-center p-3 font-medium mr-2 text-center bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
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
          <select
            name="location"
            id="location"
            className="mt-4 appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="" disabled selected>
              Setup your Location
            </option>
            <option
              value="gps"
            >
              <FaLocationArrow className="inline-block mr-2" /> Use GPS
            </option>
          </select>
          <div className="flex flex-row-reverse items-center px-2 py-3 text-gray-700">
            <FaMapMarkerAlt />
          </div>
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
