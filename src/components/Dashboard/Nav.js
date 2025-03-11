import React from 'react';

function Nav({ Toggle }) {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-2">
          <button className="text-gray-500 hover:text-gray-600" onClick={Toggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
     
          <div className="w-full justify-center items-center dark:bg-gray-800 px-4">
            <div className="flex rounded-md w-full max-w-xl">
              <input
                type="text"
                name="q"
                id="query"
                placeholder="Serach here"
                className="flex-1 p-2 rounded-md bg-[#F5F4FA] border border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-[#F5F4FA] dark:text-gray-300 dark:border-none text-xs" // Adjusted padding and font size
              />
              <button className="bg-[#184CA2] text-white text-xs font-semibold py-1 px-6 rounded-r-md">
                <span>Search</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-200 w-3  fill-current hidden md:inline ml-2 " viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
