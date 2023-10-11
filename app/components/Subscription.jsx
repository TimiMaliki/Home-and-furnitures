import React from "react";

const Subscription = () => {
  return (
    <div className="grid place-content-center p-28">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Subscribe to our newsletter
      </h1>

      <div className="flex gap-8 mb-4">
      <input type="text" placeholder='E-mail'  className='border border-gray-300 hover:border-blue-300 text-xl rounded w-full h-10 px-4'/>
      <button className="border border-gray-400 w-40 hover:bg-gray-300 ">SUBMIT</button>
      </div>

      <p className="">
      Stay in the loop with the latest updates and exclusive offers by subscribing to our newsletter
      </p>
      
    </div>
  );
};

export default Subscription;
