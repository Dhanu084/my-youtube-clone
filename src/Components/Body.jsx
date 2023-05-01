import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className='h-screen m-auto sm:m-0 w-11/12 sm:mt-12 sm:pt-4'>
        <Outlet />
      </div>
    </>
  );
};

export default Body;
