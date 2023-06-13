import React, { useEffect, useState } from 'react';

const PopularInstructorsSection = () => {
  const [instructors,setInstructors]=useState([])
  useEffect(() => {
    // Fetch the instructor's classes from the API
    const fetchInstructorClasses = async () => {
      try {
        const response = await fetch('https://bangali-ranna.vercel.app/classes/approved');
        const data = await response.json();
        setInstructors(data);
      } catch (error) {
        console.error('Error fetching instructor classes:', error);
      }
    };

    fetchInstructorClasses();
  }, []);
  // const instructors = [
  //   {
  //     id: 1,
  //     name: 'John Doe',
  //     image: 'https://images.unsplash.com/photo-1588662195388-88ee410635b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=831&q=80',
  //     students: 80,
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane Smith',
  //     image: 'https://plus.unsplash.com/premium_photo-1661719297145-bcd537d3d81f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  //     students: 75,
  //   },
  //   {
  //     id: 3,
  //     name: 'Jane Smith',
  //     image: 'https://plus.unsplash.com/premium_photo-1663924748928-e72102f3e239?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
  //     students: 65,
  //   },
  //   {
  //     id: 4,
  //     name: 'Jane Smith',
  //     image: 'https://images.unsplash.com/photo-1610913729917-ae84429e28f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
  //     students: 55,
  //   },
  //   {
  //     id: 5,
  //     name: 'Jane Smith',
  //     image: 'https://images.unsplash.com/photo-1542834352-b64998ba276f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
  //     students: 75,
  //   },
  //   {
  //     id: 6,
  //     name: 'Jane Smith',
  //     image: 'https://images.unsplash.com/photo-1471646174523-327e108889e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
  //     students: 35,
  //   },
  //   {
  //     id: 7,
  //     name: 'Jane Smith',
  //     image: 'https://images.unsplash.com/photo-1595378833357-f7e96dd21132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60',
  //     students: 25,
  //   },
  //   // Add more instructor objects...
  // ];

  const sortedInstructors = [...instructors].sort((a, b) => b.students - a.students);

  
  const topInstructors = sortedInstructors.slice(0, 6);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl text-center font-semibold mb-4">Popular Instructors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {topInstructors.map((instructor) => (
          <div key={instructor._id} className="bg-white rounded shadow overflow-hidden">
            <img src={instructor.classImage} alt={instructor.instructorName} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{instructor.instructorName}</h3>
              <p className="text-gray-500">{instructor.students|| '0'} students</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructorsSection;
