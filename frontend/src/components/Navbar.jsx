import React from 'react';
import logo from '../assets/mylogo.jpg';
import { Link } from "react-router-dom";
import { useUserContext } from '../Usercontext';

export default function Navbar() {
  let { username } = useUserContext();
  if (username && username.length > 6) {
    username = username.slice(0, 6) + '...';
  }
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  };
  return (
    <nav className="navbar flex items-center justify-between" style={{ backgroundColor: 'white',opacity: '0.7', opzIndex: 100, fontFamily: 'Oxygen', fontWeight: 'bold' }}>
      <div className='logo ml-3 mt-3 w-12 h-12 flex items-center'>
        <img src={logo} alt="mylogo" />
        <Link to='/'><span className='heading ml-2 items-start'>DAILYCIOUS</span></Link>
      </div>
      <div className="navelements ml-10">
        <Link to='/' className='active-link px-5 hover:bg-orange-500 rounded-lg'>
          Home
        </Link>
        <Link to='/menu' className='px-5 hover:bg-orange-500 rounded-lg'>
          Menu
        </Link>
        <Link to='/about' className='px-5 hover:bg-orange-500 rounded-lg'>
          About Us
        </Link>
        <Link to='/bookslot' className='px-5 hover:bg-orange-500 rounded-lg'>
          Book a slot
        </Link>
        <Link to='/reservation' className='px-5 hover:bg-orange-500 rounded-lg'>
          Reservations
        </Link>
      </div>
      <div className='loginprof ml-1 mt-3 w-60 h-12 flex items-center'>
        <div className='loginprof ml-1 mt-3 w-60 h-12 flex items-center'>
          {username ? (
            <>
              <div className='w-[26] relative'>
                <span className="inline-block h-4 w-4 md:h-10 md:w-10 mr-5 overflow-hidden rounded-full">
                  <img
                    className="object-cover h-full w-full"
                    src="https://th.bing.com/th/id/OIP.0H2FBvCT-goHME7xb5eWEQHaHa?pid=ImgDet&rs=1"
                    alt="profilepic"
                  />
                </span>
              </div>


              <span className='mr-5'>Welcome, {username}!</span>
            </>
          ) : (
            <>
              <Link to='/login'>
                <button className='hover-bg-green-500 bg-transparent border border-solid border-black rounded-sm w-20 h-8'>Login</button>
              </Link>
            </>
          )}
          {username && (
            <div>
              <button onClick={handleLogout} className='ml-1 hover:bg-red-500 bg-transparent border border-solid border-black rounded-sm w-14 h-8'>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
