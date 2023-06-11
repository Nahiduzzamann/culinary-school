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
    await fetch(`http://localhost:5000/instructorClassFeedback/${classId}`, {
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
    <div>
      <h2>Manage Classes</h2>
      {classes.length === 0 ? (
        <p>No classes available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem) => (
              <tr key={classItem._id}>
                <td>
                  <img src={classItem.classImage} alt={classItem.className} width="50" height="50" />
                </td>
                <td>{classItem.className}</td>
                <td>{classItem.instructorName}</td>
                <td>{classItem.instructorEmail}</td>
                <td>{classItem.availableSeats}</td>
                <td>{classItem.price}</td>
                <td>{classItem.status}</td>
                <td>
                  {classItem.status === 'pending' && (
                    <>
                      <button onClick={() => handleApprove(classItem._id)} disabled={classItem.status !== 'pending'}>
                        Approve
                      </button>
                      <button onClick={() => handleDeny(classItem._id)} disabled={classItem.status !== 'pending'}>
                        Deny
                      </button>
                    </>
                  )}
                  <button onClick={() => handleSendFeedback(classItem._id)}>Send Feedback</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {feedbackModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter Feedback</h2>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Enter your feedback..."
            ></textarea>
            <div>
              <button onClick={handleCloseFeedbackModal}>Cancel</button>
              <button onClick={handleSubmitFeedback}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;