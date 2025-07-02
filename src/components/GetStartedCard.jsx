import React from "react";
import CTAButton from "./CTAButton"; // Ensure correct import path

export default function GetStartedCard({ image, title, label }) {
    return (
        <div className="relative flex flex-row bg-white shadow-lg border rounded-md overflow-hidden min-h-[220px]">
            {/* Top-right pink label */}
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-semibold px-3 py-1 z-10">
                {label}
            </div>

            {/* Left: Image */}
            <div className="w-1/3 h-auto">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right: Text + Button */}
            <div className="w-2/3 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-700 mb-4">
                    Discover how you can build, explore, and grow with Ethereum.
                </p>

                <CTAButton variant="pink" className="w-fit">
                    Get Started
                </CTAButton>
            </div>
        </div>
    );
}
