import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-6 px-4">
                <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <p className="mt-2">123 Main Street, City</p>
                        <p>nahid.cse.diu.19@gmail.com</p>
                        <p>+8801750666272</p>
                    </div>
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold">Useful Links</h3>
                        <ul className="mt-2">
                            <li className="mb-2">
                                <a href="#about">About Us</a>
                            </li>
                            <li className="mb-2">
                                <a href="#courses">Courses</a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/3">
                        <h3 className="text-lg font-semibold">Stay Connected</h3>
                        <p className="mt-2">Follow us on social media:</p>
                        <div className="flex mt-2">
                            <a href="#" className="mr-2 text-white hover:text-gray-400">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="mr-2 text-white hover:text-gray-400">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#" className="mr-2 text-white hover:text-gray-400">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-800 my-6" />
                <div className="text-center text-sm">
                    <p>&copy; 2023 Culinary School. All rights reserved.</p>
                    <p className="mt-2">
                        Designed and developed by {' '}
                        <a
                            href="https://example.com"
                            className="text-white hover:text-gray-400 font-bold"
                        >
                            Culinary School
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
