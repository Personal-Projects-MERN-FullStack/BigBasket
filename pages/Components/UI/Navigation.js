import React from "react";
import Link from "next/link";
import { useState } from "react";
import Timeslot from "../Multiuse/Timeslot";

const Navigation = () => {
  const [sidebar, setsidebar] = useState(false);
  const [navdown, setnavdown] = useState();

  const onclickhandler = () => {
    setsidebar(!sidebar);
  };
  return (
    <>
      {/* Slide bar of Navigation */}

      <div
        className={`min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800 ${
          !sidebar && "hidden"
        } fixed`}
      >
        <div
          className={`fixed flex flex-col top-0 left-0 w-64 bg-white h-full  `}
        >
          <div className="flex items-center justify-between p-2 h-14 border-b bg-gray-500">
            <div className="border p-1 rounded-sm flex justify-center items-center border-white text-white font-thin text-sm px-4">
              <button> login or sign up</button>
            </div>
            <div onClick={onclickhandler}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>{" "}
            </div>
          </div>
          <div className="flex  p-2 h-14 border-b ">
            <div className="w-1/6  flex justify-start items-center text-gray-400">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="w-4/6  flex justify-start items-center text-sm ">
              <span> Alandi Devachi, Pune</span>
            </div>
            <div className="w-1/6   flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" text-gray-400 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
          </div>

          <Timeslot />

          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li lass="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-md font-medium tracking-wide text-gray-500 px-2">
                    Home
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Smart Basket / My List
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="ml-2 text-sm tracking-wide truncate font-semibold">
                    Shop by Category
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-lg   ">{">"}</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Offers
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="ml-2 text-sm tracking-wide truncate">
                    The Beauty Store
                  </span>
                  <span className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="ml-2 text-sm tracking-wide truncate">
                    bb Cookbook
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                >
                  <span className="ml-2 text-sm tracking-wide truncate">
                    FAQ
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navigation Here */}
      <div className=" h-20  bg-special-green">
        <div className=" h-1/2 p-2 flex ">
          <div className="w-2/6 flex justify-start items-center text-white">
            <span onClick={onclickhandler}>
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
          <div className="w-2/6  flex justify-center items-center font-bold text-white">
            <span>Smallbasket
              
            </span>
          </div>
          <div className="w-2/6 flex justify-end items-center text-white">
            <span>
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
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className=" h-1/2 px-2   flex justify-center items-center">
          <div className="w-5/6 md:w-4/6  rounded-md bg-white h-7 flex">
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
              alt="logo here"
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
    </>
  );
};

export default Navigation;
