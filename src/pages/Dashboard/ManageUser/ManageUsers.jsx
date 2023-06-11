import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'

const ManageUsers = () => {
  // const [users, setUsers] = useState([]);

  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users')
    return res.json()
  })

  const handleMakeInstructor = async (userId) => {
    fetch(`http://localhost:5000/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: 'instructor' }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch()
          alert('Making Instructor Done!')
        }
      })
  };

  const handleMakeAdmin = async (userId) => {
    fetch(`http://localhost:5000/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role: 'admin' }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch()
          alert('Making Admin Done!')
        }
      })

  };

  return (
    <div>
      <h2>Manage Users</h2>
      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table className='w-full'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role || 'Student'}</td>
                <td>
                  <button className='btn-success m-1' onClick={() => handleMakeInstructor(user._id)}>Make Instructor</button>
                  <button className='btn-success' onClick={() => handleMakeAdmin(user._id)}>Make Admin</button>
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