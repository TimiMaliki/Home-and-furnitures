"use client";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaShoppingCart, FaSearch, FaHeart } from "react-icons/fa";
import React, { useState } from "react";

const NavMenu = () => {
  let [open, setOpen] = useState(false);
  return (
    <nav className="shadow-2xl w-full">
      <div className="w-full h-44  px-32   items-center lg:items-center lg:flex lg:justify-between">
        <div className="Logo mt-10 -ml-10 lg:ml-0 lg:mt-0">
          <h2 className="text-black text-4xl">Maliki</h2>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className=" w-7 h-7  absolute top-20 left-5 md:hidden cursor-pointer"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <div className="pages">
          <ul
            className={`  grid absolute cursor-pointer  sm:text-md lg:text-xl lg:flex lg:gap-4 left-4 lg:static ${
              open ? "top-28" : "top-[-490px]"
            }`}
          >
            <Link href="/">
              <li className="text-red-500">Home</li>
            </Link>
            <Link href="/pages/blog">
              <li className="duration-200 hover:text-red-600">Blog</li>
            </Link>
            <Link href="">
              <li className="duration-200 hover:text-red-600">E-Catalog</li>
            </Link>
            <Link href="">
              <li className="duration-200 hover:text-red-600">Shop</li>
            </Link>
            <Link href="">
              <li className="duration-200 hover:text-red-600">ShowRoom</li>
            </Link>
            <Link href="/pages/aboutUs">
              <li className="duration-200 hover:text-red-600">About Us</li>
            </Link>
          </ul>
        </div>

        <div className="cart grid items-center justify-center cursor-pointer ml-40 -mt-8 lg:mt-0 text-xs gap-1 lg:gap-4  lg:flex  sm:text-sm lg:text-xl  lg:mt-0  lg:-ml-0 ">
          <h2 className="text-xs sm:text-sm lg:text-xl">MY ACCOUNT</h2>
          <h3 className="text-xs sm:text-sm lg:text-xl">3D</h3>

          <div className="flex text-2xl lg:gap-2">
            <FaShoppingCart className="text-gray-400 text-2xl" />
            <div className="rounded-full bg-red-200 w-5 h-5 relative">
              <div className="absolute text-sm pl-1.5">
                <p>0</p>
              </div>
            </div>
          </div>

          <FaSearch className="text-2xl" />

          <div className="flex text-2xl">
            <FaHeart className="text-gray-400" />
            <div className="rounded-full bg-red-200  w-5 h-5  relative -mt-3 lg:-translate-x-2">
              <div className="absolute text-sm pl-1.5 ">
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
