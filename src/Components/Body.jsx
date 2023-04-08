import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className='h-screen w-11/12'>
      <Outlet />
    </div>
  );
};

export default Body;
