import React from 'react'
import herojpg from '../assets/hero.jpg';
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div>
      <div className='hero-section mt-20 h-[320px] relative flex items-center justify-center' style={{ zIndex: 10 }}>
        <img className='hero-image' src={herojpg} alt="hero-section" />
        <div style={{ color: 'black', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontFamily: 'Oxygen', fontWeight: 'bold', padding: '20px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum reiciendis, quae dicta debitis tempora eius obcaecati repellendus. In odio ducimus perferendis numquam maiores, reiciendis totam eum nesciunt placeat. Rem doloremque placeat eum. Vel, modi. Nihil fugiat dolor dolorum quibusdam quod vero exercitationem mollitia itaque laboriosam voluptates ratione ipsam, molestiae aut praesentium ab iusto illum! Molestias fugiat quae nam qui veniam facilis vel, error laboriosam ullam! Ab quae dicta praesentium nostrum labore? Alias vel, error reiciendis laboriosam quasi tempora fugit autem iusto nam minus vero eaque accusantium necessitatibus optio ratione saepe. Dignissimos, necessitatibus fugit.
          <Link to='/login'><button className='hover:bg-orange-500 bg-transparent border border-solid border-black rounded-sm w-32 h-8 block ml-56 mt-8'>Get Started
          </button></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero