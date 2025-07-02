import React from "react";
import { FaFolderOpen, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    const goToProfile = () => {
        navigate("/dashboard/profile"); // Navigates to profile inside dashboard layout
    };

    const goToProjects = () => {
        navigate("/dashboard"); // Navigates to dashboard (projects page)
    };

    return (
        <div className="w-64 bg-white shadow-md p-6 hidden md:flex flex-col justify-between min-h-screen">
            {/* Top: Avatar and Navigation */}
            <div>
                {/* Circular Profile Image */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/profile.webp"
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-2 border-blue-500 cursor-pointer"
                        onClick={goToProfile}
                    />
                </div>

                <ul className="space-y-4 text-gray-700 font-medium">
                    <li
                        onClick={goToProjects}
                        className="flex items-center gap-2 hover:text-blue-600 cursor-pointer"
                    >
                        <FaFolderOpen /> Projects
                    </li>
                </ul>
            </div>

            {/* Bottom: Logout */}
            <div className="text-gray-700 font-medium">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 hover:text-red-500 cursor-pointer"
                >
                    <FaSignOutAlt /> Logout
                </button>
            </div>
        </div>
    );
}
