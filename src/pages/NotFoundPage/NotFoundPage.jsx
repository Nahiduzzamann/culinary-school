import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex items-center justify-center h-screen" style={backgroundImageStyle}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl mb-8 text-white">Page not found</p>
        <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

