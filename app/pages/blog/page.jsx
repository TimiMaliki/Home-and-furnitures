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
          <Image src={banner} className="w-full h-48 object-cover" alt="..."/>
          <div className="absolute top-0 mt-16 grid left-32 lg:left-1/2">
          <h1 className="text-gray-50 font-extrabold text-5xl left-64">
            Blog
          </h1>
          </div>
         
        </div>
      

      {/* card-one */}
      <div className=" p-5 lg:p-20 mt-20 w-full h-full gap-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div className="card  lg:w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image ">
            <div className="image-body">
              <Image src={StyleWoman} className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-24  absolute  grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture Design trends</h2>
              </div>
            </div>

            <div className="w-10 h-12 lg:w-16 lg:h-16 ml-2 lg:ml-4 -mt-44 lg:-mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>


          {/* cardtwo */}

          <div className="card w-32 lg:w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={manWoman}  className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-20 absolute  lg:grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture <br/> Design trends</h2>
              </div>
            </div>

            <div className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 lg:ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>

          {/* cardthree */}
          <div className="card w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={Type} className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-20 absolute  lg:grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture <br/> Design trends</h2>
              </div>
            </div>

            <div className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 lg:ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
      </div>



    

      {/* card-two */}
      <div className="p-20 mt-20 w-full h-full gap-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div className="card w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={Dinner} className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-20 absolute  lg:grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture <br/> Design trends</h2>
              </div>
            </div>

            <div className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 lg:ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>


          {/* cardtwo */}

          <div className="card w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={funiture} className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-20 absolute  lg:grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture <br/> Design trends</h2>
              </div>
            </div>

            <div className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 lg:ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>

          {/* cardthree */}
          <div className="card w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={TypeColor}  className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-20 absolute  lg:grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture <br/> Design trends</h2>
              </div>
            </div>

            <div className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 lg:ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
      </div>



 {/* card-three */}
 <div className="p-20 mt-20 w-full h-full gap-8 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div className="card w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={Tradition }  className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-20 absolute  lg:grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture <br/> Design trends</h2>
              </div>
            </div>

            <div className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 lg:ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>


          {/* cardtwo */}

          <div className="card w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={Colors} className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-20 absolute  lg:grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture <br/> Design trends</h2>
              </div>
            </div>

            <div className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 lg:ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>

          {/* cardthree */}
          <div className="card w-full  h-full rounded">
          {/* card-image-body */}
          <div className="card-image">
            <div className="image-body ">
              <Image src={Niger}  className="lg:w-[700px] h-48 object-cover" alt="..."/>
              <div className=" w-20 absolute  lg:grid place-content-center  lg:w-64 lg:h-12 rounded  -mt-10 sm:-mt-10 lg:-mt-10 text-white  bg-red-800 text-center">
                <h2 className="text-sm  lg:text-lg">furniture <br/> Design trends</h2>
              </div>
            </div>

            <div className="sm:w-12 sm:h-12 lg:w-16 lg:h-16 lg:ml-4  -mt-44 absolute  bg-gray-300 rounded">
              <div className="grid place-content-center">
                <h2>18</h2>
                <h1>Sept</h1>
              </div>
            </div>
          </div>
          {/* card-body */}
          <h2 className="font-extrabold text-sm sm:text-lg md:text-xl lg:text-2xl mt-2">
              Sitting in Style: Exotic Chairs for Every Room
            </h2>
            <div className="flex justify-center gap-8 mb-4">
             <BiSolidShareAlt size={30} className="text-gray-300"/>
            </div>
            <p className="mb-4">
              As long as people have been furnishing homes, they've been
              designing (and shopping for) chairs to go in them. And...
            </p>

            <h1 className="lg:text-xl font-bold text-red-800">
              CONTINUE READING...
            </h1>
          </div>
      </div>


    

    </div>
  );
};

export default page;




