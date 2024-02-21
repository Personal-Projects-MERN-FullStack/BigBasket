import React, { useContext, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Productnavigation from "../Components/Navigations/Productnavigation";
import Productlistitem from "../Components/Products/Productlistitem";
import { TodosContext } from "../Components/context/TodosContext";
const Index = () => {
  const [prod_data, setprod_data] = useState([]);
  const [product_count, setproduct_count] = useState(0);
  const [addnotification, setAddnotification] = useState(false);
  const { product_result, setproduct_result, products_item } =
    useContext(TodosContext);
  const router = useRouter();

  useEffect(() => {
    const catagory = router.asPath.split("=");
    setproduct_result(catagory[1]);
    if (product_result) {
      const catagiri = products_item[product_result];
      // console.log(catagiri,"data")
      let data = [];
      for (const key in catagiri) {
        // console.log(catagiri[key]);
        // console.log(key)

        data = data.concat(catagiri[key]);
        setprod_data(data);
        // data = data.concat(catagiri[key]);
        // console.log(data,"data")
      }
    }
  }, [router, product_result, setproduct_result, products_item]);

  // console.log(typeof prod_data)
  // for(const key in prod_data){
  //   console.log(typeof prod_data)
  // }

  // if(product_result){
  //   setprod_data(products_item[product_result]);
  //   console.log(products_item["milk"]);
  //   for(key in products_item){
  //     console.log(key)
  //   }

  //   }

  // console.log(myArray[1]);
  let count = 0;
  const cartaddnotification = (pname, price) => {
    confirm(`Your Product ${pname} with ${price} is successfully added to cart`)
  };
  return (
    <div>
    




      <Productnavigation />



      <div className="h-12 md:hidden w-full flex bg-spcial-background flex-nowrap  overflow-x-auto ">
        <div className=" w-28 flex justify-center items-center   border-white m-2 text-sm bg-white shadow-sm rounded-sm border  shadow-black">
          Amol
        </div>
        <div className=" w-28 flex justify-center items-center  border-white m-2 text-sm bg-white shadow-sm rounded-sm border  shadow-black">
          Amol
        </div>
        <div className=" w-28 flex justify-center items-center  border-white m-2 text-sm bg-white shadow-sm rounded-sm border  shadow-black">
          Amol
        </div>
        <div className=" w-28 flex justify-center items-center  border-white m-2 text-sm bg-white shadow-sm rounded-sm border  shadow-black">
          Amol
        </div>
        <div className=" w-28 flex justify-center items-center  border-white m-2 text-sm bg-white shadow-sm rounded-sm border  shadow-black">
          Amol
        </div>
        <div className=" w-28 flex justify-center items-center  border-white m-2 text-sm bg-white shadow-sm rounded-sm border  shadow-black">
          Amol
        </div>
      </div>
      <div className="h-12 w-full flex bg-gray-100 justify-between items-center px-2 py-1">
        <div className="text-black h-full"> {count} Items </div>
        <div className="flex space-x-2 h-full ">
          <div className="px-1 bg-white h-full rounded-md w-20 flex  items-center shadow-sm shadow-black ">
            <div className="w-3/6 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
              </svg>
            </div>
            <div className="w-3/6 flex justify-center items-center">Sort</div>
          </div>
          <div className="px-1 bg-white h-full rounded-md w-20 flex justify-center  items-center shadow-sm shadow-black ">
            <div className="w-3/6 flex justify-center  items-center">
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <div className="w-3/6 flex justify-center items-center">Filter</div>
          </div>
        </div>
      </div>
      <div className="md:flex  md:w-full">
        <div className="md:w-1/6 md:border md:h-screen md:bg-green-300 md:p-2 hidden md:block">
          <div className="md:font-bold md:text-lg md:bg-white md:flex md:justify-center">
            Catagiries
          </div>
          <div className="md:h-auto p-2 my-2 md:w-full  w-screen flex flex-col  flex-nowrap bg-gray-200  ">
            <div className="  ">Amol milk</div>
            <div className="  ">Dahi</div>
            <div className="  ">Tak</div>
            <div className="  ">Icecream</div>
          </div>
          <div className="md:font-bold md:text-lg md:bg-white md:flex md:justify-center">
            Similar Product
          </div>
          <div className="md:h-auto p-2 my-2 md:w-full  w-screen flex flex-col  flex-nowrap bg-gray-200  ">
            <div className="  ">Dahi</div>
            <div className="  ">milk</div>
            <div className="  ">ICe-cream</div>
            <div className="  ">Kulfi</div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-3 md:w-5/6">
          {prod_data.map((product_data) => {
            // console.log(prod_data)
            count++;

            return (
              <Productlistitem
                key={product_data.id}
                catagories={product_result}
                data={product_data}
                cartaddnotification={cartaddnotification}
              />
            );
          })}
          {console.log(count)}
        </div>
      </div>
    </div>
  );
};

export default Index;
