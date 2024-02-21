import { createContext, useState, useEffect } from "react";
const TodosContext = createContext();

const TodosProvider = ({ children }) => {
  const [slugpagedata, setslugpagedata] = useState({})
  const [slugpage, setslugpage] = useState();
  const [cart, setcart] = useState({});
  const [subTotal, setsubTotal] = useState(0);
  const [product_result, setproduct_result] = useState();
  // const [sidebar, setsidebar] = useState(false);

  useEffect(() => {
    try {
      if (JSON.parse(localStorage.getItem("cart"))) {
        setcart(JSON.parse(localStorage.getItem("cart")));
        savecart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const savecart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);

    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]]["price"] * myCart[keys[i]].qty;
    }

    setsubTotal(subt);
  };

  const addtoCart = async (itemcode, qty, price, name, weight, varient , img) => {
    let newCart = cart;

    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty + qty;
      newCart[itemcode].weight = Number(cart[itemcode].weight) + Number(weight);
    } else {
      newCart[itemcode] = { qty: 1, price, name, weight, varient , img };
    }
    setcart(newCart);
    savecart(newCart);
  };

  const clearcart = () => {
    setcart({});
    savecart({});
  };

  const removefromcart = (itemcode, qty, price, name, weight, varient) => {
    let newCart = cart;
    // console.log(cart)
    if (itemcode in cart) {
      newCart[itemcode].qty = cart[itemcode].qty - qty;
      newCart[itemcode].weight =
        Number(cart[itemcode].weight) - Number(weight / 2);
    }
    if (newCart[itemcode].qty <= 0) {
      delete newCart[itemcode];
    }
    setcart(newCart);
    savecart(newCart);
  };
  const value = "something else";

  const products = [
    {
      catagories: "dairy",
      img: "https://image.shutterstock.com/image-photo/glass-milk-isolated-on-white-260nw-464050136.jpg",
      discount: "upto 10%",
    },
    {
      catagories: "fruits",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEm_6_iLIXpq91Z_VJbhIFjnEmkmUOrSRcg&usqp=CAU",
      discount: "upto 15%",
    },
    {
      catagories: "Vegetables",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Marketvegetables.jpg/1200px-Marketvegetables.jpg",
      discount: "upto 20%",
    },
    {
      catagories: "Snacks",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL0_TmHooJP0plsA_BCCC4Y-vHMeQdRtKlnQ&usqp=CAU",
      discount: "upto 5%",
    },
    {
      catagories: "biscuits",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwRyq5gG7yOkQcdU2tMq5Ub1pi5S50kRfaA&usqp=CAU",
      discount: "upto 15%",
    },
    {
      catagories: "Coming soon",
      img: "",
      discount: "upto 0%",
    },
   
  ];
  const products_item = {
    dairy: {
      milk: [
        { id:"101",
          product_name: "Milk",
          cata: "milk",
          brand: "Amol",
          qty: "1 liter",
          price: "50",
          img: "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
          seller_name: "Samarth milk wale",
          Rating: "4 Star",
        },
        {
          id:"102",
          product_name: "Milk",
          cata: "milk",
          brand: "Amol",
          qty: "500 ml",
          price: "25",
          img: "https://www.bigbasket.com/media/uploads/p/l/306926-2_4-amul-homogenised-toned-milk.jpg",
          seller_name: "",
          Rating: "4 Star",
        },
      ],
      Dahi: [
        {id:"203",
          product_name: "Dahi",
          cata: "Dahi",
          brand: "sai",
          qty: "250ml",
          price: "15",
          img: "https://www.jiomart.com/images/product/original/490808047/amul-masti-dahi-1-kg-pouch-product-images-o490808047-p590032629-0-202203170902.jpg",
          seller_name: "samarth dahi wale",
          Rating: "4 Star",
        },
        {id:"204",
          product_name: "Dahi",
          cata: "dahi",
          brand: "sairam",
          qty: "500 ml",
          price: "35",
          img: "https://cdn3.mydukaan.io/app/image/700x700/?url=https://mydukaan-prod-new.s3.amazonaws.com/468593/8c45c077-8945-460a-ab7b-f40dba526c7d.png",
          seller_name: "dahi wale samarth",
          Rating: "4 Star",
        },
      ],
    },
    fruits: {
      apple: [
        { id:"501",
          product_name: "Apple",
          cata: "fruits",
          brand: "Kashmiri",
          qty: "500gm",
          price: "120",
          img: "https://image.shutterstock.com/image-photo/glass-milk-isolated-on-white-260nw-464050136.jpg",
          seller_name: "Samarth milk wale",
          Rating: "4 Star",
        },
        {id:"502",
          product_name: "Apple",
          cata: "fruits",
          brand: "Kashmiri",
          qty: "500gm",
          price: "120",
          img: "https://image.shutterstock.com/image-photo/glass-milk-isolated-on-white-260nw-464050136.jpg",
          seller_name: "Samarth milk wale",
          Rating: "4 Star",
        },
      ],
      pinaple: [
        {id:"601",
          product_name: "Pinaple",
          cata: "fruits",
          brand: "Kashmiri",
          qty: "500gm",
          price: "120",
          img: "https://image.shutterstock.com/image-photo/glass-milk-isolated-on-white-260nw-464050136.jpg",
          seller_name: "Samarth milk wale",
          Rating: "4 Star",
        },
        {
          producid:"602",
          product_name: "Pinaple",
          cata: "fruits",
          brand: "pakistani",
          qty: "500gm",
          price: "120",
          img: "https://image.shutterstock.com/image-photo/glass-milk-isolated-on-white-260nw-464050136.jpg",
          seller_name: "Samarth milk wale",
          Rating: "-4 Star",
        },
      ],
    },
  };

  // console.log(catagiri)
  // for(let i=1;i<=catagiri.keys();i++){

  //   console.log(i)
  // }
  // var myObject = { 'a': 1, 'b': 2, 'c': 3 };

  // Object.keys(myObject).forEach(function(key, index) {
  //   myObject[key] *= 2;
  // });

  // console.log(myObject);
  // => { 'a': 2, 'b': 4, 'c': 6 }

  return (
    <TodosContext.Provider
      value={{
        cart,
        addtoCart,
        removefromcart,
        clearcart,
        subTotal,
        value,
        product_result,
        setproduct_result,
        products,
        products_item,
        slugpagedata,
        setslugpagedata,
        slugpage,
        setslugpage
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
export { TodosProvider, TodosContext };
