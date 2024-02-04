import React from "react";

export const Feed = () => {
  return (
    <>
      <div className="font-custFont p-2 ">
        <div className="bg-gray-100 max-w-sm p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="text-lg tracking-wider mb-2 font-bold text-gray-900 dark:text-white">
              Subscribe to Premium
            </h5>
          </a>
          <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
            Subscribe to unlock new features and if eligible,receive a share of ads revenue
          </p>
          <a
            href="#"
            className="px-5 inline-flex items-center py-2 text-sm font-medium text-center text-white bg-black rounded-[30px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
           
          </a>
        </div>
      </div>
    </>
  );
};
