import React from 'react';

function Menucards({ foodname, imgpath, description, price, category }) {
  return (
    <div className='feature-card border border-solid border-gray-400 rounded-sm w-[20rem] ml-10'>
      <h1 className='card-title flex items-center justify-center' style={{ fontFamily: 'Oxygen', fontWeight: 'bold', padding: '20px' }}>
        {foodname}
      </h1>
      <div className='card-img flex items-center justify-center'>
        <img src={`/MenuItems/${imgpath}`} alt='card-img' className='w-48 h-48'></img>
      </div>
      <div className='card-desc items-center justify-center' style={{ fontFamily: 'Oxygen', fontWeight: 'bold', padding: '20px' }}>
        <p>{description}</p>
        <span className='text-orange-600 flex items-center justify-center'>₹{price}</span>
        <span>
          <p className="font-semibold">Categories:</p>
          <div className="flex flex-wrap gap-1">
            {category.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 border border-solid border-gray-400 rounded-sm px-2 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </span>
      </div>
    </div>
  );
}

export default Menucards;
