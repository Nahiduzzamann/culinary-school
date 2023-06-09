import React from 'react';

const PopularClassesSection = () => {
  const classes = [
    {
      id: 1,
      title: 'Italian Cuisine',
      image: 'https://plus.unsplash.com/premium_photo-1664475872802-c8b87eec84b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      students: 50,
    },
    {
      id: 2,
      title: 'Baking Essentials',
      image: 'https://images.unsplash.com/photo-1546552916-985b466ffbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      students: 45,
    },
    {
      id: 3,
      title: 'Baking Essentials',
      image: 'https://images.unsplash.com/photo-1499126167718-c87f5c1387e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      students: 45,
    },
    {
      id: 4,
      title: 'Baking Essentials',
      image: 'https://images.unsplash.com/photo-1656711858987-1956a99f646a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      students: 35,
    },
    {
      id: 5,
      title: 'Baking Essentials',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      students: 15,
    },
    {
      id: 6,
      title: 'Baking Essentials',
      image: 'https://images.unsplash.com/photo-1628191079582-f982c2fe327b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
      students: 45,
    },
    {
      id: 7,
      title: 'Baking Essentials',
      image: 'https://plus.unsplash.com/premium_photo-1683707120265-52ef6617c0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
      students: 20,
    },
    // Add more class objects...
  ];

  // Sort classes based on the number of students
  const sortedClasses = [...classes].sort((a, b) => b.students - a.students);

  // Get the top 6 classes
  const topClasses = sortedClasses.slice(0, 6);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Popular Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {topClasses.map((classItem) => (
          <div key={classItem.id} className="bg-white rounded shadow overflow-hidden">
            <img src={classItem.image} alt={classItem.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{classItem.title}</h3>
              <p className="text-gray-500">{classItem.students} students</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClassesSection;
