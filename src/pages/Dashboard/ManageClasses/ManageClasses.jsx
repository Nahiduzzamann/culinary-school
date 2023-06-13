import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  useEffect(() => {
    // Fetch all classes from the database
    const fetchClasses = async () => {
      try {
        const response = await fetch('http://localhost:5000/instructorClass');
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, []);

  const handleApprove = async (classId) => {
    try {
      // Update the class status to approved in the database
      await fetch(`http://localhost:5000/instructorClass/${classId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'approved' }),
      });

      // Disable the approve and deny buttons
      setClasses((prevClasses) =>
        prevClasses.map((classItem) => {
          if (classItem.id === classId) {
            return { ...classItem, status: 'approved' };
          }
          return classItem;
        })
      );
    } catch (error) {
      console.error('Error approving class:', error);
    }
  };

  const handleDeny = async (classId) => {
    try {
      // Update the class status to denied in the database
      await fetch(`http://localhost:5000/instructorClass/${classId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'denied' }),
      });

      // Disable the approve and deny buttons
      setClasses((prevClasses) =>
        prevClasses.map((classItem) => {
          if (classItem.id === classId) {
            return { ...classItem, status: 'denied' };
          }
          return classItem;
        })
      );
    } catch (error) {
      console.error('Error denying class:', error);
    }
  };

  const handleSendFeedback = (classId) => {
    setSelectedClassId(classId);
    setFeedbackModalOpen(true);
  };

  const handleCloseFeedbackModal = () => {
    setSelectedClassId('');
    setFeedbackText('');
    setFeedbackModalOpen(false);
  };

  const handleSubmitFeedback = async () => {
    try {
      // Update the class with admin feedback in the database
      await fetch(`http://localhost:5000/instructorClassFeedback/${selectedClassId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminFeedback: feedbackText }),
      });

      // Close the feedback modal
      setFeedbackModalOpen(false);
      setSelectedClassId('');
      setFeedbackText('');

      // Update the classes state with the new feedback
      setClasses((prevClasses) =>
        prevClasses.map((classItem) => {
          if (classItem.id === selectedClassId) {
            return { ...classItem, adminFeedback: feedbackText };
          }
          return classItem;
        })
      );
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Manage Classes</h2>
      {classes.length === 0 ? (
        <p>No classes available.</p>
      ) : (
        <table className="border-collapse w-full">
          <thead>
            <tr>
              <th className="border py-2 px-4">Class Image</th>
              <th className="border py-2 px-4">Class Name</th>
              <th className="border py-2 px-4">Instructor Name</th>
              <th className="border py-2 px-4">Instructor Email</th>
              <th className="border py-2 px-4">Available Seats</th>
              <th className="border py-2 px-4">Price</th>
              <th className="border py-2 px-4">Status</th>
              <th className="border py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td className="border py-2 px-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={classItem.classImage} alt={classItem.className} className="w-full h-full object-cover" />
                  </div>
                </td>
                <td className="border py-2 px-4">{classItem.className}</td>
                <td className="border py-2 px-4">{classItem.instructorName}</td>
                <td className="border py-2 px-4">{classItem.instructorEmail}</td>
                <td className="border py-2 px-4">{classItem.availableSeats}</td>
                <td className="border py-2 px-4">{classItem.price}</td>
                <td className="border py-2 px-4">{classItem.status}</td>
                <td className="border py-2 px-4">
                  {classItem.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleApprove(classItem._id)}
                        disabled={classItem.status !== 'pending'}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold px-2 py-1 rounded mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDeny(classItem._id)}
                        disabled={classItem.status !== 'pending'}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded"
                      >
                        Deny
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => handleSendFeedback(classItem._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded ml-2"
                  >
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {feedbackModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="modal bg-white p-4 rounded shadow">
            <h2 className="text-lg font-bold mb-2">Enter Feedback</h2>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Enter your feedback..."
              className="w-full h-24 border border-gray-300 rounded p-2 mb-2"
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleCloseFeedbackModal}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-2 py-1 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitFeedback}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-2 py-1 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
