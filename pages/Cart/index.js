import Productnavigation from "../Components/Navigations/Productnavigation";
import { useContext, useEffect, useState } from "react";
import { TodosContext } from "../Components/context/TodosContext";
import Cartitem from "../Components/Cart/Cartitem";
import Link from 'next/link';

const Index = () => {
  const cartdata = useContext(TodosContext);
  const { cart, clearcart, subTotal } = cartdata;

  return (
    <><Productnavigation />
      <div className="bg-spcial-background h-screen w-screen ">
        
        <div className="h-8 p-2 flex items-center justify-between text-lg">
          <span>Fruits and Vegetables</span>
          <span>{Object.keys(cart).length} items</span>
        </div>

        {Object.keys(cart).length === 0 && <div className="mx-2 my-6 "> Your cart is empty !! Add Something to checkout</div>}
        <ul className="">
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <Cartitem cartitem={cart[k]} />
              </li>
            );
          })}
        </ul>

        <div className="flex justify-end items-center h-12 w-ful p-2 m-2">
          <div
            className="bg-red-900 rounded-md p-2 text-white hover:bg-red-800 cursor-pointer"
            onClick={clearcart}
          >
            Clear cart
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-full h-16 bg-gray-900 flex ">
        <div className="w-3/6 flex-col p-2 space-y-2 justify-center items-center">
          <div className="h-2/6 flex justify-start items-center py-1 text-white text-lg">
            Rs {subTotal}
          </div>
          <div className="h-2/6  flex justify-start items-center py-1 text-special-green">
            Saved Rs {subTotal/4}
          </div>
        </div>
        <div className=" w-3/6 py-1">
          <Link href="/Checkout">
          <div className={`${(Object.keys(cart).length >= 1) ? 'bg-red-800/90' : 'bg-gray-700'} my-2 mx-2 p-2 text-white rounded-sm flex justify-center items-center text-xl `}>
            CHECKOUT
          </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
