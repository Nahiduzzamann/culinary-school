import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState([]); //current user from DB
    useEffect(() => {
        // Fetch all users from the database
        const fetchUsers = async () => {
            try {
                const response = await fetch(`https://bangali-ranna.vercel.app/user/${user.email}`);
                const data = await response.json();
                setCurrentUser(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [user]);
    // const userRole = 'admin'
    const userRole = currentUser.user?.role || 'general'; // 'general', 'instructor', 'admin'
    const getMenuItems = () => {
        if (userRole === 'general') {
            return [
                <li key="selectedClasses">
                    <Link to="dashboard/selected-classes">Selected Classes</Link>
                </li>,
                <li key="enrolledClasses">
                    <Link to="/enrolled-classes">Enrolled Classes</Link>
                </li>,
            ];
        } else if (userRole === 'instructor') {
            return [
                <li key="addClass">
                    <Link to="dashboard/add-class">Add a Class</Link>
                </li>,
                <li key="myClasses">
                    <Link to="dashboard/my-classes">My Classes</Link>
                </li>,
            ];
        } else if (userRole === 'admin') {
            return [
                <li key="manageClasses">
                    <Link to="dashboard/manage-classes">Manage Classes</Link>
                </li>,
                <li key="manageUsers">
                    <Link to="dashboard/manage-users">Manage Users</Link>
                </li>,
            ];
        } else {
            return []; // Default empty array for unrecognized roles
        }
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <h1 className='text-3xl uppercase'>Hello {userRole} user</h1>
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {getMenuItems()}
                    <div className="divider"></div>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;






