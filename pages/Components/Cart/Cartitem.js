import React ,{useContext}from 'react'
import {TodosContext} from '../context/TodosContext';

const Cartitem = ({cartitem}) => {
  
   
  const { qty, price, name, weight,varient,img}= cartitem;
  
  const cartdata = useContext(TodosContext);
  const {addtoCart, removefromcart } = cartdata;
 
  return (<>
    <div className="bg-white h-40 flex border">
        <div className=" flex h-full w-2/6 ">
          <div className="overflow-hidden">
            <img
              alt="ecommerce"
              className="lg:w-1/2  w-full lg:h-auto h-64 object-cover object-center rounded"
              src={img}
            />
          </div>
        </div>
        <div className=" flex-col h-full w-2/6 p-2">
          <div className="h-2/6  flex-col ">
            <div className="text-md font-semibold">{name}</div>
            <div className="text-gray-500 text-xs">{weight}</div>
          </div>
          <div className="h-2/6  "></div>
          <div className="h-2/6  flex-col justify-start items-start">
            <div>
              <span className="text-sm line-through text-gray-500 ">
                ₹{price}
              </span>
            </div>
            <div>
              <span className="font-semibold text-lg text-gray-900">₹{price}</span>
            </div>
          </div>
        </div>
        <div className=" flex-col h-full w-2/6 p-2">
          <div className="h-2/6 w-full"></div>
          <div className="h-2/6 w-full"></div>
          <div className="flex justify-around items-center h-2/6 w-full">
            <div onClick={()=>{removefromcart(name,1, price, name, weight, varient)}} className=" cursor-pointer border-2 border-special-green rounded-md px-2 flex justify-center items-center h-auto">
              -
            </div>
            <div className="text-lg">{qty}</div>
            <div onClick={()=>{ addtoCart(name, 1, price, name, weight, varient)}} className=" cursor-pointer border-2 border-special-green rounded-md px-2 flex justify-center items-center h-auto">
              +
            </div>
          </div>
        </div>
      </div>
      
      </> )
}

export default Cartitem