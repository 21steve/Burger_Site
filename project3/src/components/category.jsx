import React from "react";
import { categories } from "../assets/data/data";
const category = () => {
  return (
    <div className="max-w-[1680px] m-auto px-4 py-8">
      <h1 className="text-center text-4xl font-bold text-orange-600">
        Top Rated Food
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-5">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-300 flex items-center p-4 justify-between shadow-md rounded-xl"
            >
              <h1 className="font-bold">{item.name}</h1>
              <img src={item.image} alt={item.name} className="w-20" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default category;
