import React from "react";

const Sidebar = () => {
  return (
    <div className='w-60 h-screen shadow-md'>
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
