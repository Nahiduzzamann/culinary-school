import React from 'react';

const InstructorCard = ({ image, name, email }) => {
  return (
    <div className="max-w-sm mx-auto">
      <div
        className="w-40 h-40 mx-auto rounded-lg shadow-md bg-gray-300 flex items-center justify-center"
        style={{ aspectRatio: '1/1' }}
      >
        <img src={image} alt={name} className="w-full h-full rounded-lg" />
      </div>
      <div className="mt-4 text-white">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
