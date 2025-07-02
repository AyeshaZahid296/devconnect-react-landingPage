import { FiNavigation } from "react-icons/fi";
export default function Card({
    icon,
    title,
    description,
    actionText,
    actionLink,
    isDisabled,
    colorClass = "",
    bottomBarColor = "",
}) {
    return (
        <div
            className={`flex flex-col justify-between border rounded-md shadow-md overflow-hidden min-h-[240px]
        ${colorClass}
      `}
        >
            <div className="p-6 flex flex-col flex-grow">
                <img src={icon} alt={title} className="w-10 h-10 mb-2" />
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-700 mt-1 flex-grow">{description}</p>
            </div>
            <div className="px-6 pb-4">
                {actionLink ? (
                    <a
                        href={actionLink}
                        className={`flex gap 3 item-center  justify-end text-sm font-semibold ${isDisabled ? "text-gray-500 cursor-not-allowed" : "text-blue-600 hover:underline"
                            }`}
                    >
                        {actionText} <FiNavigation />
                    </a>
                ) : (
                    <span className="flex justify-end text-sm font-semibold text-gray-600">{actionText}</span>
                )}
            </div>
            {/* Bottom bar */}
            <div className={`h-2 w-full ${bottomBarColor}`}></div>
        </div>
    );
}
