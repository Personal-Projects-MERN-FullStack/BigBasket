import Catagirious from "./Components/Multiuse/Catagirious";
import Slider from "./Components/Multiuse/Slider";
import Timeslot from "./Components/Multiuse/Timeslot";
import Navigation from "./Components/UI/Navigation";
import { useContext } from "react";
import { TodosContext } from "./Components/context/TodosContext";
// import { IoBasket } from 'react-icons/IO';

export default function Home() {
  const { cart, addtoCart, removefromcart, clearcart, subTotal } =
    useContext(TodosContext);
  // console.log(cart, addtoCart, removefromcart, clearcart, subTotal); 1
  return (
    <div className="mb-32">
      <Navigation />
      <div className="bg-spcial-background h-screen w-full border px-2 py-4 space-y-2">
        <Timeslot bg="bg-white shadow shadow-black border-none rounded-sm" />
        <Slider />
        <div className="bg-white shadow p-2 shadow-black border-none rounded-sm  flex-cols px-1">
          <div className=" flex justify-between items-center h-2/6 ">
            <div>
              <span className="text-xl font-semibold  px-1">
                SHOP BY CATEGORY
              </span>
            </div>
            {/* <div> <IoBasket/></div> */}
          </div>
        </div>
        <Catagirious />
        
      </div>
    </div>
  );
}
