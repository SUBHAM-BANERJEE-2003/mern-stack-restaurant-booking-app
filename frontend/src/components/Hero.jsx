import React from 'react'
import herojpg from '../assets/hero.jpg';
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div>
      <div className='hero-section mt-20 h-[320px] relative flex items-center justify-center' style={{ zIndex: 10 }}>
        <img className='sm:hero-image h-80 max-w-[90%]' src={herojpg} alt="hero-section" />
        <div style={{ color: 'black', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Oxygen', fontWeight: 'bold', padding: '20px' }}>
          <p className='text-sm sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum reiciendis, quae dicta debitis tempora eius obcaecati repellendus. In odio ducimus perferendis numquam maiores, reiciendis totam eum nesciunt placeat.</p>
          <Link to='/login'><button className='hover:bg-orange-500 bg-transparent border border-solid border-black rounded-sm block mt-3 absolute left-1/2'>Get Started
          </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero