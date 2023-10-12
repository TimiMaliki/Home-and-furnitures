import React from "react";
import Coin from "../../../public/coin.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full">
        <div className="relative">
          {" "}
          <Image src={Coin} className="w-full h-48 object-cover" />
          <h1 className="absolute -mt-28 text-gray-300 text-4xl left-64">
            BLOG
          </h1>
        </div>
      </div>

      <div className="p-20 mt-20 w-full h-full border border-red-400 grid">
        <div className="card w-2/5 h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body bg-black">
              <Image src={Coin} className="w-[500px] h-48 object-contain" />
              <div className="lg:w-64 h-8 rounded absolute lg:ml-28 -mt-2 text-white text-sm bg-red-800 text-center">
                <h2>Furnitures,Design trends</h2>
              </div>
            </div>

            <div className="w-16 h-16 ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <div className="card-body grid place-content-center p-20 h-80 border border-gray-300 ">
            <h2 className="font-extrabold text-2xl mb-8">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-8">
              <p>By</p>
              <p>Icons</p>
              <p>Vendatta</p>
              <p>Icon</p>
              <p>Icon</p>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">CONTINUE READING...</h1>
          </div>


        </div>








      </div>
    </div>
  );
};

export default page;
