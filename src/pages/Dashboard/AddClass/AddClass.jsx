import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [className, setClassName] = useState('');
  const [classImage, setClassImage] = useState('');
  const instructorName = user.displayName;
  const instructorEmail = user.email;
  const [availableSeats, setAvailableSeats] = useState(0);
  const [price, setPrice] = useState(0);

  const handleAddClass = async () => {
    const classData = {
      className,
      classImage,
      instructorName,
      instructorEmail,
      availableSeats,
      price,
      status: 'pending',
    };

    try {
      // Perform API call to add the class to the database
      await fetch('https://bangali-ranna.vercel.app/instructorClass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(classData),
      });
      alert('Class Added')
    } catch (error) {
      console.log('Error adding class:', error);
      // Handle error if necessary
    }
  };

  return (
    <div className="py-12 w-full">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Add a Class</h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
          <div className="mb-6">
            <label htmlFor="className" className="block text-lg font-semibold mb-2">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="classImage" className="block text-lg font-semibold mb-2">
              Class Image
            </label>
            <input
              type="text"
              id="classImage"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={classImage}
              onChange={(e) => setClassImage(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="instructorName" className="block text-lg font-semibold mb-2">
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={instructorName}
              readOnly
            />
          </div>
          <div className="mb-6">
            <label htmlFor="instructorEmail" className="block text-lg font-semibold mb-2">
              Instructor Email
            </label>
            <input
              type="text"
              id="instructorEmail"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={instructorEmail}
              readOnly
            />
          </div>
          <div className="mb-6">
            <label htmlFor="availableSeats" className="block text-lg font-semibold mb-2">
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="price" className="block text-lg font-semibold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={handleAddClass}
          >
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;