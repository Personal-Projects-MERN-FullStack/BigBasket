import { useRouter } from "next/router";
import { useRef, useState, useContext ,useEffect } from "react";
import Productnavigation from "../Components/Navigations/Productnavigation";
import { TodosContext } from "../Components/context/TodosContext";
const Post = () => {

  
  const cartdata = useContext(TodosContext);
  const {slugpagedata,slugpage} = useContext(TodosContext);
  const { cart, addtoCart, removefromcart, clearcart, subTotal } = cartdata;
  const weight = useRef();
  const router = useRouter();
  const [serviceble, setserviceble] = useState(null);
  const { slug } = router.query;
  const [Product_data, setProduct_data] = useState()
  const citypin = useRef();

   useEffect(() => {
    setProduct_data(JSON.parse(localStorage.getItem("slugdata")));
    
   }, [])
   
     

  const onpincodechecker = async (e) => {
    e.preventDefault();
    const pincode = await citypin.current.value;
    let pins = await fetch("/api/pincode");
    let pinjson = await pins.json();
    if (pinjson.includes(parseInt(pincode))) {
      setserviceble(true);
      setTimeout(() => {
        setserviceble(null);
      }, 3000);
    } else {
      setserviceble(false);
      setTimeout(() => {
        setserviceble(null);
      }, 3000);
    }
  };
 console.log()
 if(Product_data){
  
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Productnavigation  catagiri={Product_data.cata}/>

      <div className="fixed bottom-0 left-0 right-0  h-12 flex ">
        <div className="flex w-3/6 cursor-pointer bg-gray-700 text-white justify-center items-center space-x-2">
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
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </span>
          <span>SAVE FOR LATER</span>
        </div>
        <div
          onProgress={() => {
            addtoCart(Product_data.product_name, 1, Product_data.price, Product_data.product_name, Product_data.qty , "",Product_data.img);
          }}
          onClick={() => {
            addtoCart(Product_data.product_name, 1, Product_data.price, Product_data.product_name, Product_data.qty , "",Product_data.img);
          }}
          className="flex w-3/6 cursor-pointer bg-red-500 h-12 justify-center text-white items-center space-x-2"
        >
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </span>
          <button>ADD TO BASKET</button>
        </div>
      </div>
      <div className="container px-5  y-4 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={Product_data.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Vegetables
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {Product_data.cata}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">{Product_data.Rating} Reviews</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>

            <div className="flex justify-between mt-6 items-center  mb-2">
              <div className="flex">
                {/* <span className="mr-3">color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button> */}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <span
                    
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                  >
                    {Product_data.qty}
                  </span>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹{Product_data.price}
                <span className="text-sm line-through mx-1">₹{Product_data.price}</span>
              </span>

              {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Add to cart
              </button> */}
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="flex justify-start my-2">
              <form
                onSubmit={onpincodechecker}
                className="flex 4/6 border border-black justify-between "
              >
                <input
                  type="number"
                  placeholder="Enter your pincode "
                  className="py-2 h-9 w-5/6 "
                  ref={citypin}
                />
                <button type="submit" className="bg-green-900 text-white px-2">
                  <span>Check</span>
                </button>
              </form>
            </div>
            {serviceble && (
              <div className="">
                <span className="text-green-900">
                  Yup !! Your address is servicable{" "}
                </span>
              </div>
            )}
            {!serviceble && (
              <div className="">
                <span className="text-red-900">
                  Sorry !! We do not deliver to this pincode yet
                </span>
              </div>
            )}
            <h1 className="my-2 text-xl font-semibold text-black">
              About Product
            </h1>
            <span className="leading-relaxed ">
              <dt>
                <li>
                  Onions are known to be rich in biotin. Most of the flavonoids
                  which are known as anti-oxidants are concentrated more in the
                  outer layers, so when you peel off the layers, you should
                  remove as little as possible.
                </li>
                <li>
                  Onion can fill your kitchen with a thick spicy aroma. It is a
                  common base vegetable in most Indian dishes, thanks to the
                  wonderful flavor that it adds to any dish.
                </li>
              </dt>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
 }
 else{
  return(<div className="h-screen w-full flex justify-center items-center ">Loading...</div>);
 }
};

export default Post;
