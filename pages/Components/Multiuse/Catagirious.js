import image from "next/image";
import React, { useContext } from "react";
import Dashprouduct from "./Dashprouduct";
import { TodosContext } from "../context/TodosContext";
const Catagirious = (props) => {
  const { products } = useContext(TodosContext);

  return (
    <div className={`  flex-cols px-1`}>
      <div
        className={`flex-wrap   flex justify-content items-center   `}
      >
        {products.map((data) => {
          return (
            <Dashprouduct
              key={data.title}
              title={data.catagories}
              image={data.img}
              discount={data.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Catagirious;
