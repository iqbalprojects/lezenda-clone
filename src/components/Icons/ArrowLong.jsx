import React from "react";

const ArrowLong = ({ className }) => {
    return (
        <div
            className={`${className} border rounded-full h-8 w-8 grid place-content-center`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                className="w-5 h-5"
                stroke="white"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                />
            </svg>
        </div>
    );
};

export default ArrowLong;
