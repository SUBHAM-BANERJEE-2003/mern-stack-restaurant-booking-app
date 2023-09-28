import React, { useEffect, useState } from 'react';
import logo from '../assets/mylogo.jpg';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Navbar() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    // Fetch the username using the token from local storage
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:3000/getusername', {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${token}`, // Include the JWT token in the header
        },
      })
        .then(response => {
          console.log(response.data.data);
          const { success, username } = response.data;
          if (success) {
            setUsername(username);
            localStorage.setItem('username',username);
          } else {
            console.error('Authentication failed');
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.reload();
  };
  return (
    <nav className="navbar flex items-center justify-between" style={{ zIndex: 100, fontFamily: 'Oxygen', fontWeight: 'bold' }}>
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
        {username ? (
          <span className='mr-5'>Welcome, {username}!</span>
        ) : (
          <Link to='/login'>
            <button className='hover:bg-green-500 bg-transparent border border-solid border-black rounded-sm w-20 h-8'>Login</button>
          </Link>
        )}
        {username && (
          <div>
            <button onClick={handleLogout} className='ml-1 hover:bg-red-500 bg-transparent border border-solid border-black rounded-sm w-14 h-8'>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
