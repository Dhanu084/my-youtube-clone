import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className='h-screen m-auto sm:m-0 w-11/12'>
      <Outlet />
    </div>
  );
};

export default Body;
