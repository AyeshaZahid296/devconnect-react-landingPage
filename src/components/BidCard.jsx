import React from "react";

export default function BidCard({ bidder, amount, date, message }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md p-5">
            <h4 className="text-blue-700 font-bold text-md mb-1">{bidder}</h4>
            <p className="text-sm text-gray-600 mb-1">
                <strong>Amount:</strong> ${amount}
            </p>
            <p className="text-sm text-gray-500 mb-1">
                <strong>Date:</strong> {date}
            </p>
            <p className="text-sm text-gray-700 mt-2">{message}</p>
        </div>
    );
}
