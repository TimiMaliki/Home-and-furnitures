import React from "react";

const BuyerTrust = () => {
  return (
    <div className="w-full h-full  overflow-hidden grid place-content-center p-20">
      <div className="text-center">
        <h1 className="text-red-600 text-lg lg:text-xl font-bold mb-8">Buyers trust us</h1>
        <h2 className="w-96 h-20 font-extrabold text-3xl text-lg lg:text-xl px-8">
          Our Strategy Is To Provide Our Customers With Quality Products
        </h2>

        <div className="py-20">
          <h3 className="w-96  text-sm lg:text-lg mb-8 text-lg lg:text-xl px-10">
            To Vento Furniture, Luxury and Comfort is the hallmark of all our
            products; from our High-Quality Sofa to our contemporary Dining set
            to our uniquely designed tables and chairs, we infuse the hallmark
            of quality and comfort as essential details when crafting any of our
            products.
          </h3>

          <h3 className="w-96  text-sm text-lg lg:text-xl px-10">
            Our attention to detail ensures that when you purchase a piece of
            furniture from Vento Furniture, it will provide superior value and
            comfort. Our products are designed with safety in mind as well,
            creating pieces that are long-lasting and safe for all family
            members. We strive to ensure our customers enjoy their experience
            with us by providing the highest quality product and unbeatable
            customer service whenever you buy a Vento Furniture Product.
          </h3>
        </div>

        <div className="flex gap-4 justify-center invisible lg:visible">

            <div className="flex">
            <div className="border border-black  w-1/2 "></div>
            <div className="border border-red-500 w-40"></div>
            </div>

            <div className="flex">
            <div className="border border-red-500 w-40 "></div>
            <div className="border border-black w-1/2"></div>
            </div>
            
        </div>

      </div>
    </div>
  );
};

export default BuyerTrust;
