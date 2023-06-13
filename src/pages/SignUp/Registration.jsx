import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import Spinner from '../Login/Spinner';

const Registration = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const photoUrl = form.photoUrl.value;

        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{6,}$/;

        if (
            name.trim() === '' ||
            email.trim() === '' ||
            password === '' ||
            confirmPassword === '' ||
            photoUrl.trim() === ''
        ) {
            // Empty fields error
            setErrorMessage('All fields are required');
        } else if (password.length < 6) {
            // Password length error
            setErrorMessage('Password must be at least 6 characters long');
        } else if (!passwordRegex.test(password)) {
            // Password requirements error
            setErrorMessage(
                'Password must contain at least one capital letter, one special character, and one digit'
            );
        } else if (password !== confirmPassword) {
            // Password mismatch error
            setErrorMessage('Passwords do not match');
        } else {
            const info = { displayName: name, photoURL: photoUrl };
            setIsLoading(true);

            createUser(email, password)
                .then((result) => {
                    setErrorMessage('');
                    const user = result.user;
                    setIsLoading(false);
                    navigate(from, { replace: true });

                    updateUser(info)
                        .then((result) => {
                            const saveUser = { name: name, email: email }
                            fetch('https://bangali-ranna.vercel.app/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        // reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate(from, { replace: true });

                                    }
                                })
                        })
                        .catch((error) => {
                            setIsLoading(false);
                        });

                })
                .catch((error) => {
                    setIsLoading(false);
                    setErrorMessage(error.message)
                });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Registration</h2>
                {errorMessage && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                        <p>{errorMessage}</p>
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input input-bordered w-full"
                            placeholder="Enter your name"
                            name="name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="input input-bordered w-full"
                            placeholder="Enter your email"
                            name="email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="input input-bordered w-full"
                            placeholder="Enter your password"
                            name="password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block font-medium mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="input input-bordered w-full"
                            placeholder="Confirm your password"
                            name="confirmPassword"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block font-medium mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoUrl"
                            className="input input-bordered w-full"
                            placeholder="Enter your photo URL"
                            name="photoUrl"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full mb-4" disabled={isLoading}>

                        {isLoading ? <Spinner /> : 'Register'}
                    </button>
                    <p className="mt-2">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;