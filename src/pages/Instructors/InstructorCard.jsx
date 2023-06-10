import React from 'react';

const InstructorCard = ({ image, name, email }) => {
  return (
    <div className="max-w-sm mx-auto">
      <img src={image} alt={name} className="w-full h-auto rounded-lg" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;
