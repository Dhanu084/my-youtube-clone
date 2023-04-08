import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Slices/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className='grid grid-flow-col h-16 shadow-lg'>
      <div className='col-span-4 sm:col-span-1 sm:mx-2 my-4 cursor-pointer'>
        <img
          onClick={() => dispatch(toggleMenu())}
          className='w-8 sm:h-8 sm:w-10'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgz8qMxRmaHif6zYN0OyOJ2zi8gBulBwLPnw&usqp=CAU'
        />
      </div>

      <div className='col-span-12 sm:col-span-2'>
        <img
          className='h-12 w-56 my-2'
          src='data:image/png;base64,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'
        />
      </div>

      <div className='hidden sm:visible col-span-0 sm:col-span-10'>
        <input
          className='w-96 p-2 my-2 h-10 border-2 rounded-l-3xl'
          type='text'
          placeholder='Search'
        />
        <button className='h-10 px-2 w-12 my-2 text-center rounded-r-3xl bg-gray-100'>
          🔍
        </button>
      </div>
      <div className='col-span-2 my-2 text-2xl'>🅿️</div>
    </div>
  );
};

export default Header;
