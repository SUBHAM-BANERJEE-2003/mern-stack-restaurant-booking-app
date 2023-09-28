import React from 'react';
import { Link } from 'react-router-dom';

function Featurecards({ title, imgpath, description, pathto, linktext }) {
  return (
    <div className='feature-card border border-solid border-gray-400 rounded-sm h-[35rem] w-[20rem] mt-28 ml-10'>
      <h1 className='card-title flex items-center justify-center' style={{ fontFamily: 'Oxygen', fontWeight: 'bold', padding: '20px' }}>
        {title}
      </h1>
      <div className='card-img flex items-center justify-center'>
        <img src={`/${imgpath}`} alt='card-img' className='w-56 h-56'></img>
      </div>
      <div className='card-desc items-center justify-center' style={{ fontFamily: 'Oxygen', fontWeight: 'bold', padding: '20px' }}>
        {description}
        <div>
          <Link to={`/${pathto}`} className='text-orange-600 flex items-center justify-center'>{linktext}</Link>
        </div>
      </div>
    </div>
  );
}

export default Featurecards;


