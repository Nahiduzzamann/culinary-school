import React from 'react';
import { Transition } from '@headlessui/react';
import 'animate.css';

const RelevantSection = () => {
  const showSection = true; 

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Culinary School Programs</h2>

        <Transition
          show={showSection}
          enter="animate__animated animate__fadeIn"
          leave="animate__animated animate__fadeOut"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow animate__animated animate__fadeIn transform transition-all duration-300 hover:scale-105">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvZmVzc2lvbmFsJTIwQ2hlZiUyMENlcnRpZmljYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Culinary Program 1" className="w-full h-40 mb-4 rounded object-cover" />
              <h3 className="text-lg font-semibold mb-2">Professional Chef Certification</h3>
              <p className="text-gray-500">Master the art of culinary skills and techniques with our comprehensive professional chef certification program.</p>
            </div>

            <div className="bg-white p-6 rounded shadow animate__animated animate__fadeIn transform transition-all duration-300 hover:scale-105">
              <img src="https://images.unsplash.com/photo-1604881748185-46bff830c5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Culinary Program 2" className="w-full h-40 mb-4 rounded object-cover" />
              <h3 className="text-lg font-semibold mb-2">Baking and Pastry Arts</h3>
              <p className="text-gray-500">Delve into the world of baking and pastry arts, and learn to create delectable pastries, cakes, and breads.</p>
            </div>

            <div className="bg-white p-6 rounded shadow animate__animated animate__fadeIn transform transition-all duration-300 hover:scale-105">
              <img src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SW50ZXJuYXRpb25hbCUyMEN1aXNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Culinary Program 3" className="w-full h-40 mb-4 rounded object-cover" />
              <h3 className="text-lg font-semibold mb-2">International Cuisine</h3>
              <p className="text-gray-500">Explore the diverse flavors and techniques of international cuisine, and broaden your culinary horizons.</p>
            </div>

          </div>
        </Transition>
      </div>
    </div>
  );
};

export default RelevantSection;
