import React from "react";

const HeadlineCards = () => {
  return (
    // Space allocated for cards
    <div className="max-w-[1680px] mx-auto p-4 py-5 grid md:grid-cols-3 gap-6">
      {/* Card Section */}
      <div className="rounded-xl relative">
        {/* Overlay for text */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white p-4">
          <p className="font-bold text-2xl ">Sun's Out, BOGO's Out</p>
          <p>Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
          alt="card"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay for text */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white p-4">
          <p className="font-bold text-2xl">New Restaurants</p>

          <p>Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="card"
        />
      </div>
      <div className="rounded-xl relative">
        {/* Overlay for text */}
        <div className="absolute w-full h-full bg-black/40 rounded-xl text-white p-4">
          <p className="font-bold text-2xl ">We Deliver Desserts Too</p>
          <p>Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D"
          alt="card"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
