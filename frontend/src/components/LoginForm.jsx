import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    try {
      const response = await axios.post(
        'http://localhost:3000/loginserver',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const { token } = response.data;

        // Save the token to local storage
        localStorage.setItem('token', token);
        navigate('/');
        window.location.reload();
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 401) {
        if (error.response.data.message === 'Invalid email or password') {
          setEmailError('Email or password is incorrect');
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {emailError && <p className="text-red-600 text-sm">{emailError}</p>}
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
            {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}
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
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Log In
            </button>
            <Link to='/signup'><p className='mt-10 text-blue-500'>Dont have an account?Create One</p></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
