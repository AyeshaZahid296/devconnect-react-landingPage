import { FiNavigation } from "react-icons/fi";

export default function CTAButton({ children = "GET STARTED", variant = "blue", className = "", ...props }) {
    const colorMap = {
        blue: "bg-blue-600 hover:bg-blue-700",
        pink: "bg-pink-500 hover:bg-pink-700",
    };

    const colorClasses = colorMap[variant] || colorMap.blue;

    return (
        <button
            {...props}
            className={`flex gap-3 w-fit px-6 py-3 text-white font-semibold rounded shadow items-center
                ${colorClasses}
                hover:shadow-lg active:scale-95 active:shadow-inner
                transition-all duration-150 ease-in-out
                ${className}`}
        >
            {children} <FiNavigation />
        </button>
    );
}
