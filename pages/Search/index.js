import React from "react";
import SeachSuggestion from "../Components/Multiuse/SeachSuggestion";
import Link from "next/dist/client/link";
const index = () => {
  return (
    <>
      <div className="h-14  bg-special-green flex  items-center    ">
        <div className=" h-1/2 px-2   flex justify-center items-center w-5/6">
          <div className="w-full  rounded-md bg-white h-7 flex px-2">
            <div className="w-full">
              <input
                type="search"
                style={{ outline: "none" }}
                placeholder="Search 18000+ products"
                className="text-sm  w-full h-full"
              />
            </div>

            <div className="flex justify-center items-center text-gray-400 w-1/12  h-full">
              <Link href="/Product?catagories=dairy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillrule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link href="/">
            <span className="text-white">Cancel</span>
          </Link>
        </div>
      </div>
      <div className="h-full w-full bg-white pl-4 py-2">
        <h1 className="text-sm text-gray-500">
          <i> Top seaches</i>
        </h1>
      </div>
      <div className="space-y-6">
        <div></div>
        <SeachSuggestion title="rice" />
        <SeachSuggestion title="break" />
        <SeachSuggestion title="onion" />
        <SeachSuggestion title="vegetables" />
        <SeachSuggestion title="tea" />
        <SeachSuggestion title="buiskeets" />
      </div>
    </>
  );
};

export default index;
