import React, { useState } from "react";
import { data } from "../assets/data/data";
const food = () => {
  const [food, setfoods] = useState(data);
  //filter Type burger/pizza
  const filterType = (category) => {
    setfoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //filter price
  const filterPrice = (price) => {
    setfoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1680px] mx-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top rated Menu items
      </h1>
      {/* ROW */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* TYPE */}

        <p className="font-bold text-gray-70">Filter Type</p>
        <div className="flex justify-between flex-wrap">
          <button
            onClick={() => setfoods(data)}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            All
          </button>{" "}
          <button
            onClick={() => filterType("burger")}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            Burger
          </button>
          <button
            onClick={() => filterType("Pizza")}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            Pizza
          </button>
          <button
            onClick={() => filterType("salad")}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            Salad
          </button>
          <button
            onClick={() => filterType("chicken")}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            Chicken
          </button>
        </div>

        {/* PRICE */}

        <p className="font-bold text-gray-70">Filter Price</p>
        <div className="flex justify-between flex-wrap">
          <button
            onClick={()=>setfoods(data)}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            All
          </button>
          <button
            onClick={() => filterPrice("$")}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            $
          </button>
          <button
            onClick={() => filterPrice("$$")}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            $$
          </button>
          <button
            onClick={() => filterPrice("$$$")}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            $$$
          </button>
          <button
            onClick={() => filterPrice("$$$$")}
            className="text-orange-700 border-orange-500 m-1 hover:bg-orange-600 hover:text-white"
          >
            $$$$
          </button>
        </div>
      </div>
      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {food.map((item, index) => {
          return (
            <div
              key={index}
              className="border shadow-lg hover:scale-105 duration-300 rounded-t-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-2">
                <p className="font-bold text-m">{item.name}</p>
                <p className="text-m text-white">
                  <span className="bg-orange-600 rounded-full px-2 py-1 border ">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default food;
