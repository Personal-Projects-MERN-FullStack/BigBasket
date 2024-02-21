import React from "react";
import Link from "next/link";
const Footnavbar = () => {
  return (
    <div
      className={` ${navdown} fixed bg-white bottom-0 left-0 right-0 w-full h-16 border border-gray-400 flex justify-around items-center text-sm ${
        sidebar && "hidden"
      } `}
    >
      <div className="flex flex-col justify-center items-center text-sm ">
        <span>
          <img
            src="https://www.pngkey.com/png/full/282-2828535_bb-logo-symbol.png"
            className="h-6 w-6"
            alt=" logo here"
          />
        </span>
        <span>Home </span>
      </div>
      <Link href="/Catagories">
        <div className="flex flex-col justify-center items-center text-sm text-gray-500">
          <span>
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </span>
          <span>Categories </span>
        </div>
      </Link>
      <Link href="/Search">
        <div className="flex flex-col justify-center items-center text-sm text-gray-500">
          <span>
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <span>Search </span>
        </div>
      </Link>

      <div className="flex flex-col justify-center items-center text-sm text-gray-500">
        <span>
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
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <span>Offers </span>
      </div>
      <Link href="/Cart">
        <div className="cursor-pointer flex flex-col justify-center items-center text-sm text-gray-500">
          <span>
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
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </span>
          <span>Basket </span>
        </div>
      </Link>
    </div>
  );
};

export default Footnavbar;
