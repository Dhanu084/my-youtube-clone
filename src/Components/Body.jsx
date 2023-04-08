import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className='h-screen w-screen'>
      <Outlet />
    </div>
  );
};

export default Body;
