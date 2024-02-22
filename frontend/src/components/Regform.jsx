import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegForm() {
  const navigate = useNavigate();
  const [existingUserError, SetexistingUserError] = useState('')
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://dailycious-mernstack-api.vercel.app/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('response from server', response);
      if (response.status === 200) {
        console.log('User registered successfully');
        navigate('/login');
      }
      else {
        console.error('Registration failed');
        return false;
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        SetexistingUserError(error.response.data.message);
        console.error('Error:', error.response.data.message);
      } else {
        console.error('Error:', error);
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register new account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {existingUserError && <p className="text-red-600 text-sm">{existingUserError}</p>}
            <label htmlFor="username" className="block text-gray-600 font-semibold">Username<span className='text-red-600'>*</span></label>
            <input
              type="text"
              id="username"
              name="username" // Add the "name" attribute to link it with state
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your Username"
              value={formData.username} // Bind the value to state
              onChange={handleInputChange} // Call the handleInputChange function
              required
            />

          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-semibold">Email<span className='text-red-600'>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-semibold">Password<span className='text-red-600'>*</span></label>
            <input
              type="password"
              id="password"
              name='password'
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-600 font-semibold">Age</label>
            <input
              type="number"
              id="age"
              name='age'
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleInputChange}

            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegForm;
