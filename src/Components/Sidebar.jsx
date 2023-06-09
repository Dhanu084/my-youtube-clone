import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const app = useSelector((state) => state.app);
  if (!app.isMenuOpen) return <></>;
  return (
    <div className='absolute bg-gray-100 sm:bg-white z-10 sm:static w-56 h-screen shadow-md mt-12 pt-4'>
      <ul className='px-3 flex flex-col'>
        <li className='my-2'>Home</li>
        <li className='my-2'>Shorts</li>
        <li className='my-2'>Subscriptions</li>
      </ul>
      <hr />
      <ul className='px-3 flex flex-col'>
        <li className='my-2'>Library</li>
        <li className='my-2'>History</li>
        <li className='my-2'>Your Videos</li>
        <li className='my-2'>Your Movies</li>
      </ul>
      <hr />
      <ul className='px-3 flex flex-col'>
        <li className='my-2'>T-Series</li>
        <li className='my-2'>LOL Network</li>
      </ul>
    </div>
  );
};

export default Sidebar;
