import React, { useContext } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { TodosContext } from "../context/TodosContext";
const Dashprouduct = (props) => {
  const { setproduct_result } = useContext(TodosContext);

  return (
    <div className="bg-white shadow shadow-black border-none rounded-sm h-44 md:h-72 flex-col w-2/6 md:w-1/6  justify-between items-stretch p-1">
      <div className="h-4/6 w-full bg-gray-100 flex justify-center items-end  rounded-tl-full rounded-tr-full">
        <Link href={`/Product?catagories=${props.title} `}>
          <img
            onClick={() => {
              setproduct_result(props.title);
            }}
            className="w-8/12 md:w-7/12 h-5/6 md:h-6/6"
            src={props.image}
          />
        </Link>
      </div>
      <div className="h-2/6 flex-col justify-end items-baseline space-y-0">
      <Link href="/Product">
        <div
          className="  "
          onClick={() => {
            setproduct_result(props.title);
          }}
        >
          <span className="text-md flex text-blue-900 justify-center items-center font-bold">
            {props.title}
          </span>
          <div className="text-xs font-bold  justify-center items-center flex flex-col">
            Discount
            <div className="text-red-900 px-1 text-xs "> {props.discount}</div>
          </div>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Dashprouduct;
