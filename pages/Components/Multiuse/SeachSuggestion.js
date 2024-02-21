import React from "react";

const SeachSuggestion = (props) => {
  return (
    <>
      <div className="flex items-center justify-between px-4 text-base">
        <div>{props.title}</div>
        <div className="text-gray-500 -rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default SeachSuggestion;
