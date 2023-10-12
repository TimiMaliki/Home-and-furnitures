import React from "react";
import { BiSolidShareAlt } from "react-icons/bi";
import Image from "next/image";
import banner from "../../../public/aboutUs-Img/banner.jpg";
import png from "../../../public/blog-Img/d23ac428f38cb91ba3574ea6a1ce555b.png";
import manWoman from "../../../public/blog-Img/full-shot-young-man-woman-home-3-768x402.webp";
import funiture from "../../../public/blog-Img/Furniture-Combines-768x402.webp";
import Dinner from "../../../public/blog-Img/Dining-Room-Decorate-768x402.webp";
import Type from "../../../public/blog-Img/Furniture-Types-768x402.webp";
import Niger from "../../../public/blog-Img/nige-768x540.webp";
import TypeColor from "../../../public/blog-Img/The-Rise-of-Modern-768x402.webp";
import Colors from "../../../public/blog-Img/Preferred-Furniture-Colors-and-Styles-in-Nigeria-768x402.webp"
import Tradition from "../../../public/blog-Img/Traditional-Furniture-Designs-of-Nigeria-768x402.webp";
import StyleWoman from "../../../public/blog-Img/stylish-young-woman-using-digital-tablet-restaurant-table-1-768x402.webp"

const page = () => {
  return (
    <div className="w-full h-full">
        
        <div className="relative">
          <Image src={banner} className="w-full h-48 object-cover" />
          <div className="absolute top-0 mt-16 grid left-1/2">
          <h1 className="text-gray-50 font-extrabold text-5xl left-64">
            Blog
          </h1>
          </div>
         
        </div>
      

      {/* card-one */}
      <div className="p-20 mt-20 w-full h-full  columns-3 gap-8">
        <div className="card w-full  rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={StyleWoman} className="w-[700px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute left-32 -mt-2 text-white text-sm bg-red-800 text-center">
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
          <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
        </div>

        <div className="card w-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={manWoman} className="w-[500px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute  lg:ml-20 -mt-2 text-white text-sm bg-red-800 text-center">
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
          <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
        </div>

        <div className="card w-full  rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={funiture} className="w-[500px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute  lg:ml-20  -mt-2 text-white text-sm bg-red-800 text-center">
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
          <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
        </div>
      </div>

      {/* card-two  */}
      <div className="p-20 mt-20 w-full h-full  columns-3  gap-8">
        <div className="card w-full  rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body bg-black">
              <Image src={Dinner} className="w-[500px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute lg:ml-20  -mt-2 text-white text-sm bg-red-800 text-center">
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
          <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
           
          </div>
        </div>

        <div className="card w-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body bg-black">
              <Image src={Type} className="w-[500px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute lg:ml-20 -mt-2 text-white text-sm bg-red-800 text-center">
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
          <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
        </div>

        <div className="card w-full  rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body bg-black">
              <Image src={TypeColor} className="w-[500px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute lg:ml-20  -mt-2 text-white text-sm bg-red-800 text-center">
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
          <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
        </div>
      </div>

     {/* card-three */}

     <div className="p-20 mt-20 w-full h-full  columns-3 gap-8">
        <div className="card w-full  rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body bg-black">
              <Image src={Tradition } className="w-[500px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute lg:ml-20  -mt-2 text-white text-sm bg-red-800 text-center">
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
            <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
        </div>

        <div className="card w-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body bg-black">
              <Image src={Colors} className="w-[500px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute  lg:ml-20  -mt-2 text-white text-sm bg-red-800 text-center">
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
          <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
        </div>

        <div className="card w-full  rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body bg-black">
              <Image src={Niger} className="w-[500px] h-48 object-cover" />
              <div className="lg:w-64 h-8 rounded absolute lg:ml-20  -mt-2 text-white text-sm bg-red-800 text-center">
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
          <h2 className="font-extrabold text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
        </div>
      </div>
    

    </div>
  );
};

export default page;
