import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

const Classes = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()
    // Dummy data for classes
    const classes = [
        {
            id: 1,
            image: 'https://plus.unsplash.com/premium_photo-1664475872802-c8b87eec84b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Italian Cuisine',
            instructor: 'John Doe',
            availableSeats: 10,
            price: 49.99,
            approved: true
        },
        {
            id: 2,
            image: 'https://plus.unsplash.com/premium_photo-1664475872802-c8b87eec84b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Baking and Pastry',
            instructor: 'Jane Smith',
            availableSeats: 5,
            price: 29.99,
            approved: true
        },
        {
            id: 3,
            image: 'https://plus.unsplash.com/premium_photo-1664475872802-c8b87eec84b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'French Cooking',
            instructor: 'Michael Johnson',
            availableSeats: 0,
            price: 39.99,
            approved: true
        },
        {
            id: 4,
            image: 'https://plus.unsplash.com/premium_photo-1664475872802-c8b87eec84b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Sushi Making',
            instructor: 'Emily Lee',
            availableSeats: 3,
            price: 34.99,
            approved: true
        },
        {
            id: 5,
            image: 'https://plus.unsplash.com/premium_photo-1664475872802-c8b87eec84b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Vegetarian Cuisine',
            instructor: 'David Anderson',
            availableSeats: 8,
            price: 24.99,
            approved: true
        },
        {
            id: 6,
            image: 'https://plus.unsplash.com/premium_photo-1664475872802-c8b87eec84b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Cake Decorating',
            instructor: 'Sophia Davis',
            availableSeats: 2,
            price: 44.99,
            approved: true
        },
        {
            id: 7,
            image: 'https://plus.unsplash.com/premium_photo-1664475872802-c8b87eec84b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VsaW5hcnklMjBjbGFzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
            name: 'Thai Street Food',
            instructor: 'Benjamin Thompson',
            availableSeats: 7,
            price: 19.99,
            approved: true
        },
    ];

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

    const approvedClasses = classes.filter(classItem => classItem.approved);

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8 mt-20">Classes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {approvedClasses.map(classItem => (
                    <div
                        key={classItem.id}
                        className={`bg-white p-6 rounded shadow ${classItem.availableSeats === 0 ? 'bg-red-300' : ''}`}
                    >
                        <img src={classItem.image} alt={classItem.name} className="w-full h-40 mb-4 rounded object-cover" />
                        <h3 className="text-lg font-semibold mb-2">{classItem.name}</h3>
                        <p className="text-gray-500">Instructor: {classItem.instructor}</p>
                        <p className="text-gray-500">Available Seats: {classItem.availableSeats}</p>
                        <p className="text-gray-500">Price: {classItem.price} TK</p>
                        <button
                            type="button"
                            className="btn btn-primary w-full mt-4"
                            onClick={() => handleSelectClass(classItem)}
                            disabled={classItem.availableSeats === 0 || user?.role === 'admin' || user?.role === 'instructor'}
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