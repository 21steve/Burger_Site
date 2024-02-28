import React, { useState } from "react";
import { AiFillTag, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left Navbar */}
      <div className="flex items-center justify-between ">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full text-[14px]">
          <p className="bg-black text-white rounded-full p-3">Delivery</p>
          <p>Pickup</p>
        </div>
      </div>
      {/* search bar */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search for..."
        />
      </div>
      {/* Cart */}

      <button className="p-2 bg-black text-white hidden md:flex justify-between lg: px-4 items-center rounded-full">
        <AiOutlineShoppingCart className="mr-2 " />
        <p>Cart</p>
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* Side Menu */}
      <div
        className={
          nav
            ? "bg-white fixed w-[300px] h-screen z-10 top-0 left-0 duration-300 p-5"
            : "bg-white fixed w-[300px] h-screen z-10 top-0 left-[-100%] duration-300 p-5"
        }
      >
        <IoClose
          className="size-8 absolute right-4 top-4 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl">
          Best <span className="font-bold">Eats</span>
        </h2>
        <div>
          <ul className=" flex-col p-4">
            <li className="text-xl py-4 flex text-gray-800 cursor-pointer">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex text-gray-800 cursor-pointer">
              <MdFavorite size={25} className="mr-4" /> Favourites
            </li>
            <li className="text-xl py-4 flex text-gray-800 cursor-pointer">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex text-gray-800 cursor-pointer">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex text-gray-800 cursor-pointer">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex text-gray-800 cursor-pointer">
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="text-xl py-4 flex text-gray-800 cursor-pointer">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
