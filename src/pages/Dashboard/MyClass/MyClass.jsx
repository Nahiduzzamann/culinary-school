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
    <div>
      <h2>My Classes</h2>
      {instructorClasses.length === 0 ? (
        <p>No classes added yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th>Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {instructorClasses.map((classItem) => (
              <tr key={classItem.id}>
                <td>{classItem.className}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.availableSeats}</td>
                <td>{classItem.price}</td>
                <td>{classItem.status}</td>
                <td>{classItem.totalEnrolledStudents || '0'}</td>
                <td>{classItem.status === 'denied' ? classItem.feedback : '-'}</td>
                <td>
                  <button>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyClasses;