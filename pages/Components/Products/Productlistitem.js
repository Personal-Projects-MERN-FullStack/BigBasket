import Link from "next/link";
import React,{useContext} from "react";
import { TodosContext } from "../context/TodosContext";
const Productlistitem = ({data , cartaddnotification}) => {
  const {product_result,addtoCart,setslugpagedata,setslugpage} = useContext(TodosContext)
  const{ brand,img,price,qty,seller_name,Rating,product_name,id,cata}= data;
  console.table(data)
  
 const onnextpagehandler=()=>{
  localStorage.setItem("slugdata", JSON.stringify(data));
  
  setslugpage(data)
}

  return (
    <div className="h-52 md:h-72 w-full bg-white border flex px-4" key={id}>
      <div className="w-6/12 flex justify-center items-center ">
        <div className="h-4/6  cursor-pointer p-1   flex-col justify-center items-center ">
          <Link href={`/Product/${id}`} >
            <img
              onClick={onnextpagehandler}
              src={img}
              alt="product data"
              className=""
            />
          </Link>
        </div>
      </div>
      <div className="w-6/12 flex-col  ">
        <div className="h-4/6 px-4 flex-col py-4">
          <div className="text-sm text-spcial-text">{product_result}</div>
          <Link href={`/Product/${brand+cata}`} >
            <div onClick={()=>{setslugpage(data)}} className="cursor-pointer">{product_name}</div>
          </Link>
          <div className=" my-2  flex justify-between">{qty}</div>
          <div className=" flex space-x-2 items-center">
            <span className="font-bold " >
            ₹{price}.00
            </span>
            <span className="text-sm line-through">₹{price*130/100  }.00</span>
          </div>
        </div>
        <div className="h-2/6 w-full  flex items-center justify-between ">
          <div></div>
          <div
            onProgress={() => {
              addtoCart(slug, 1, 59, slug, weight.current.value, "black",img);
            }}
            onClick={() => {
              addtoCart(product_name, 1, price, product_name, qty, "black",img);
              cartaddnotification(product_name,price);
            }}
            className="bg-red-400 cursor-pointer text-sm h-8 w-6/12 rounded-sm p-1 text-white flex justify-center items-center"
          >
            ADD
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productlistitem;
