import React from 'react';
import InstructorCard from './InstructorCard';

const Instructors = () => {
  // Dummy data for instructors
  const instructors = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517314687957-13af800de1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJuYXRpb25hbCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      name: 'John Doe',
      email: 'johndoe@example.com'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517314687957-13af800de1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJuYXRpb25hbCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Jane Smith',
      email: 'janesmith@example.com'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1517314687957-13af800de1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJuYXRpb25hbCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      name: 'David Johnson',
      email: 'davidjohnson@example.com'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1517314687957-13af800de1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJuYXRpb25hbCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Emily Wilson',
      email: 'emilywilson@example.com'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1517314687957-13af800de1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJuYXRpb25hbCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Michael Brown',
      email: 'michaelbrown@example.com'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1517314687957-13af800de1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJuYXRpb25hbCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Sarah Davis',
      email: 'sarahdavis@example.com'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1517314687957-13af800de1c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW50ZXJuYXRpb25hbCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
      name: 'Christopher Lee',
      email: 'christopherlee@example.com'
    }
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8 mt-20">Our Instructors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instructors.map(instructor => (
          <InstructorCard
            key={instructor.id}
            image={instructor.image}
            name={instructor.name}
            email={instructor.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
