import React from "react";
import Sidebar from "../components/Sidebar";

export default function Profile() {
    return (
        <div className="min-h-screen flex bg-gradient-to-br from-pink-100 via-pink-50 to-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Profile Content */}
            <div className="flex flex-1 justify-center items-center px-4 py-12">
                <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-lg">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="/profile.webp"
                            alt="User Profile"
                            className="w-32 h-32 rounded-full border-4 border-blue-500"
                        />
                    </div>

                    {/* Profile Info */}
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-bold text-blue-800">Ayesha Zahid</h2>
                        <p className="text-sm text-gray-600">ayeshazahid296@example.com</p>
                        <p className="text-sm text-gray-600">Frontend Developer</p>
                        <p className="text-sm text-gray-600">Location: Karachi, Pakistan</p>
                        <p className="text-sm text-gray-600">Joined: Jan 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
