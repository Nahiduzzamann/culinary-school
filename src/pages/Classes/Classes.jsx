import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const Classes = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    const [classes, setClasses] = useState([])
    const [dBuser, setDBuser] = useState([])
    useEffect(() => {
        // Fetch the instructor's classes from the API
        const fetchInstructorClasses = async () => {
            try {
                const response = await fetch(`https://bangali-ranna.vercel.app/classes/approved`);
                const data = await response.json();
                setClasses(data);
            } catch (error) {
                console.error('Error fetching instructor classes:', error);
            }
        };

        fetchInstructorClasses();
    }, []);
    useEffect(() => {
        const fetchInstructorClasses = async () => {
            try {
                const response = await fetch(`https://bangali-ranna.vercel.app/user/${user.email}`);
                const data = await response.json();
                setDBuser(data);
            } catch (error) {
                console.error('Error fetching instructor classes:', error);
            }
        };

        fetchInstructorClasses();
    }, [user]);
    const handleSelectClass = (classItem) => {
        const { availableSeats, approved, name, image, instructor, price } = classItem
        if (!user) {
            alert('Please log in to select the course.');
            return;
        }

        if (user && user.email) {
            const cartItem = { availableSeats, approved, name, image, instructor, price, email: user.email }
            fetch('https://bangali-ranna.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };
    return (
        <div className="container mx-auto pt-20 pb-20">
            <h2 className="text-3xl font-semibold text-center mb-8 mt-20">Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {classes.map(classItem => (
                    <div
                        key={classItem._id}
                        className={`bg-white p-6 rounded shadow ${classItem.availableSeats === 0 ? 'bg-red-300' : ''}`}
                    >
                        <img src={classItem.classImage} alt={classItem.className} className="w-full h-40 mb-4 rounded object-cover" />
                        <h3 className="text-lg font-semibold mb-2">{classItem.className}</h3>
                        <p className="text-gray-500">Instructor: {classItem.instructorName}</p>
                        <p className="text-gray-500">Available Seats: {classItem.availableSeats}</p>
                        <p className="text-gray-500">Price: {classItem.price} TK</p>
                        <button
                            type="button"
                            className="btn btn-primary w-full mt-4"
                            onClick={() => handleSelectClass(classItem)}
                            disabled={classItem.availableSeats === 0 || dBuser.user?.role === 'admin' || dBuser.user?.role === 'instructor'}
                        >
                            {classItem.availableSeats === 0 ? 'No Seats Available' : 'Select'}
                        </button>
                        {!user && (
                            <p className="mt-2 text-red-600">Please log in to select the course.</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;