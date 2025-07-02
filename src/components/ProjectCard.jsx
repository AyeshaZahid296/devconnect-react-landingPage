import React from "react";

export default function ProjectCard({ image, title, task, startDate, endDate, description }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col">
            <img src={image} alt={title} className="h-48 w-full object-cover" />
            <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-800 mb-1">{title}</h3>
                <p className="text-sm font-medium text-gray-600 mb-1">Task: {task}</p>
                <p className="text-sm text-gray-500"><strong>Start:</strong> {startDate}</p>
                <p className="text-sm text-gray-500 mb-2"><strong>End:</strong> {endDate}</p>
                <p className="text-sm text-gray-700">{description}</p>
            </div>
        </div>
    );
}
