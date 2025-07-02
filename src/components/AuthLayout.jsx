// components/layouts/AuthLayout.jsx
import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/login-image.jpg';
import img2 from '../assets/images/login-img.svg';

const AuthLayout = ({ children }) => {
    const images = [img1, img2];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-screen">
            {/* Form Section */}
            <div className="w-full md:w-1/2 px-8 py-6 overflow-y-auto">
                <h2 className="text-3xl font-bold text-blue-700 mb-6"> DevConnect </h2>
                {children}
            </div>

            {/* Image Section */}
            <div className="hidden md:flex w-1/2 items-center justify-center relative overflow-hidden bg-white">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`auth-${index}`}
                        className={`absolute transition-opacity duration-1000 ease-in-out w-4/5 ${currentIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AuthLayout;
