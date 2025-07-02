export default function Card({ icon, title, description, actionText, actionLink, isDisabled, colorClass }) {
    return (
        <div
            className={`rounded-md p-6 flex flex-col justify-between shadow-md border-2
        ${colorClass} ${isDisabled ? "cursor-not-allowed opacity-80" : "hover:shadow-lg transition duration-300"}
      `}
        >
            <div className="mb-4">
                <div className="text-4xl mb-2">{icon}</div>
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-700 mt-1">{description}</p>
            </div>
            <div>
                {actionLink ? (
                    <a
                        href={actionLink}
                        className={`flex justify-end text-sm font-semibold ${isDisabled ? "text-gray-500 cursor-not-allowed" : "text-blue-600 hover:underline"
                            }`}
                    >
                        {actionText} →
                    </a>
                ) : (
                    <span className="flex justify-end text-sm font-semibold text-gray-600">{actionText}</span>
                )}
            </div>
        </div>
    );
}
