import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 w-full fixed bottom-0 left-0">
      <div className="container mx-auto flex items-center justify-center">
        <div className="border-r border-white pr-4 mr-4"></div>
        <div className="text-sm" style={{ fontFamily: 'Oxygen', fontWeight: 'bold' }}>
          &copy; 2023 Dailycious Restaurant. All Rights Reserved.
        </div>
      </div>
    </footer>

  );
}

export default Footer;
