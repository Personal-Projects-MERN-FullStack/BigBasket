import React from "react";

const Timeslot = (props) => {
  return (
    <div className={` p-2 h-18 border-b border-t  space-y-1 ${props.bg}  `}>
      <div className=" text-md ">Your next Available Slot</div>
      <div className="border border-black w-1/6"></div>
      <div className=" flex items-center space-x-1">
        <span className="text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        </span>
        <span className="text-sm">Tomorrow 8:00AM - 11:00AM</span>
      </div>
    </div>
  );
};

export default Timeslot;
