import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [instructorClasses, setInstructorClasses] = useState([]);

  useEffect(() => {
    // Fetch the instructor's classes from the API
    const fetchInstructorClasses = async () => {
      try {
        const response = await fetch('http://localhost:5000/classes/approved');
        const data = await response.json();
        setInstructorClasses(data);
      } catch (error) {
        console.error('Error fetching instructor classes:', error);
      }
    };

    fetchInstructorClasses();
  }, []);

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">My Classes</h2>
      {instructorClasses.length === 0 ? (
        <p>No classes added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Class Name</th>
                <th className="px-4 py-2">Instructor Name</th>
                <th className="px-4 py-2">Available Seats</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Total Enrolled Students</th>
                <th className="px-4 py-2">Feedback</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {instructorClasses.map((classItem) => (
                <tr key={classItem._id}>
                  <td className="border px-4 py-2">{classItem.className}</td>
                  <td className="border px-4 py-2">{classItem.instructorName}</td>
                  <td className="border px-4 py-2">{classItem.availableSeats}</td>
                  <td className="border px-4 py-2">{classItem.price}</td>
                  <td className="border px-4 py-2">{classItem.status}</td>
                  <td className="border px-4 py-2">{classItem.status === 'denied' ? classItem.feedback : '-'}</td>
                  <td className="border px-4 py-2">
                    <button className="btn btn-primary">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
