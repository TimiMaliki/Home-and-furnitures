import React from "react";

const Subscription = () => {
  return (
    <div className="grid place-content-center p-5 lg:p-28">
      <h1 className="text-xl lg:text-3xl font-semibold mb-8 text-center">
        Subscribe to our newsletter
      </h1>

      <div className="lg:flex p-8 lg:p-0 lg:gap-8 mb-4">
      <input type="text" placeholder='E-mail'  className='border border-gray-300 hover:border-blue-300 text-lg lg:text-xl rounded w-full h-10 px-4'/>
      <button className="rounded border border-gray-900 lg:border-gray-400 w-40 hover:bg-gray-300  mt-4 lg:mt-0">SUBMIT</button>
      </div>

      <p className="text-sm lg:text-lg">
      Stay in the loop with the latest updates and exclusive offers by subscribing to our newsletter
      </p>
      
    </div>
  );
};

export default Subscription;
