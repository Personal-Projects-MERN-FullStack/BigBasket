import Link from "next/link";
import React from "react";
import CatagoriesPage from "../Components/Multiuse/CatagoriesPage";

const index = () => {
  return (
    <>
      <div className="bg-special-green h-12 w-full flex justify-between items-center px-2 ">
        <div></div>
        <div>
          <span className="text-lg font-bold text-white">SHOP BY CATAGORY</span>
        </div>
        <Link href="/">
          <div>
            <span className="text-white ">
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
              </svg>
            </span>
          </div>
        </Link>
      </div>
      <div className="h-full w-full flex-col ">
        <CatagoriesPage />
        <CatagoriesPage />
        <CatagoriesPage />
        <CatagoriesPage />
        <CatagoriesPage />
        <CatagoriesPage />
        <CatagoriesPage />
        <CatagoriesPage />
      </div>
    </>
  );
};

export default index;
