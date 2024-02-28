import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto p-2 max-w-[1680px]">
      <div className="bg-black/70 max-h-[500px] relative ">
        <div className="absolute h-full w-full bg-black/40 font-bold max-h-[500px]  flex flex-col justify-center">
          <h1 className="text-white px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="text-white px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Food <span className="text-orange-500 ">Delivered</span>
          </h1>
        </div>
        <img
          className="max-h-[500px] w-full object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=550&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
