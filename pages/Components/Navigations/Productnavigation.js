import React, { useContext } from "react";
import Link from 'next/link';
import { TodosContext } from "../context/TodosContext";
const Productnavigation = (props) => {
  const context = useContext(TodosContext);
  const { setsidebar } = context;

  return (
    <div className="w-full h-12 bg-special-green border-none flex justify-between items-center">
      <div className="mx-2 flex justify-center items-center space-x-2">
        <Link href="/">
          <span className=" text-white    ">
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
        </Link>
        <span className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </div>
      <div className="mx-2 text-xl w-full font-semibold text-white">
      <div className=" h-1/2 px-2 w-full flex justify-center items-center">
          <div className="w-full md:w-4/6  rounded-md bg-white h-7 flex">
            <div className="flex justify-center items-center text-gray-400 w-1/12  h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full">
              <Link href="/Search">
                <span className="text-sm text-gray-400">
                  Search 18000+ products
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2">
        <span className="text-white font-thin">
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
      </div>
    </div>
  );
};

export default Productnavigation;
