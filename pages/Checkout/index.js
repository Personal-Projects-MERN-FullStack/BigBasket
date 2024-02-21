import React, { useContext } from "react";
import Cartitem from "../Components/Cart/Cartitem";
import { TodosContext } from "../Components/context/TodosContext";
import Productnavigation from "../Components/Navigations/Productnavigation";

const Index = () => {
  const context = useContext(TodosContext);
  const { cart, subTotal } = context;
  return (
    <div className=" w-full">
      <Productnavigation />
      <div className="">
      <div className="  ">
        <div className="flex justify-center items-center w-full py-1 bg-cyan-500">
          <span className="text-2xl  text-white font-semibold">Checkout</span>{" "}
        </div>
        <div className=" flex-col space-y-4 bg-gray-400 py-8  ">
          <div className="text-2xl font-semibold">1.Delivery Details</div>
          <form>
            <div className="flex w-full justify-between">
              <div className="3/6">
                <div>Name</div>
                <div className="border border-black ">
                  <input
                    type="text"
                    placeholder="Your name "
                    className="w-full h-full p-1"
                  />
                </div>
              </div>
              <div className="3/6">
                <div>Email</div>
                <div className="border border-black ">
                  <input
                    type="email"
                    placeholder="Your email here"
                    className="w-full h-full p-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="w-full">
                <div>address</div>
                <div className="border border-black ">
                  <textarea
                    className="w-full h-full p-1"
                    type="text"
                    placeholder="Your full address of delivery"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between">
              <div className="3/6">
                <div>Phone Number</div>
                <div className="border border-black ">
                  <input
                    type="text"
                    placeholder="10 number mobile number"
                    className="w-full h-full p-1"
                  />
                </div>
              </div>
              <div className="3/6">
                <div>Pincode</div>
                <div className="border border-black ">
                  <input type="text" className="w-full h-full p-1" />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between ">
              <div className="3/6">
                <div>State</div>
                <div className="border border-black ">
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full h-full p-1"
                  />
                </div>
              </div>
              <div className="3/6">
                <div>District</div>
                <div className="border border-black ">
                  <input
                    type="text"
                    placeholder="District "
                    className="w-full h-full p-1"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
       <div className=" ">
        <div className="bg-gray-600 pt-8  ">
          <div className="text-2xl font-semibold p-2 text-white">
            2. Review Cart items & Pay
          </div>
          <ul>
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <Cartitem cartitem={cart[k]} />
                </li>
              );
            })}
          </ul>
          <div className="py-3 mx-4">
            <button className="p-2 bg-blue-300  hover:green-500 hover:text-whtie rounded-md  ">
              subtotal ₹{subTotal}{" "}
            </button>
          </div>
        </div>
        <div className="py-3 mx-4">
          <button className="py-2 px-16 bg-blue-900  hover:green-500 hover:text-whtie rounded-md text-white text-xl ">
            Pay ₹{subTotal}{" "}
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;
