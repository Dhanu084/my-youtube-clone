import React from "react";
import ButtonContainer from "./ButtonContainer";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className='flex flex-col w-full'>
      <ButtonContainer />
      <VideoContainer />
    </div>
  );
};

export default Body;
