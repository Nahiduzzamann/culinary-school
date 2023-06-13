import React from 'react';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('https://bangali-ranna.vercel.app/users');
    return res.json();
  });

  const handleMakeInstructor = async (userId) => {
    fetch(`https://bangali-ranna.vercel.app/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: 'instructor' }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          alert('Making Instructor Done!');
        }
      });
  };

  const handleMakeAdmin = async (userId) => {
    fetch(`https://bangali-ranna.vercel.app/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: 'admin' }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          alert('Making Admin Done!');
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border py-2 px-4">Name</th>
              <th className="border py-2 px-4">Email</th>
              <th className="border py-2 px-4">Role</th>
              <th className="border py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="border py-2 px-4">{user.name}</td>
                <td className="border py-2 px-4">{user.email}</td>
                <td className="border py-2 px-4">{user.role || 'Student'}</td>
                <td className="border py-2 px-4">
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-2 py-1 rounded m-1"
                    onClick={() => handleMakeInstructor(user._id)}
                  >
                    Make Instructor
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-2 py-1 rounded"
                    onClick={() => handleMakeAdmin(user._id)}
                  >
                    Make Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageUsers;
