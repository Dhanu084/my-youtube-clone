import React from "react";

const buttons = [
  "All",
  "Javascript",
  "Python",
  "Guard Dogs",
  "Music",
  "News",
  "Gaming"
];
const ButtonContainer = () => {
  return (
    <div className='grid grid-flow-col my-4 mx-2'>
      {buttons.map((button, i) => (
        <div
          className={`h-7  col-span-4 px-4 rounded-lg mx-2 text-center  bg-gray-100 ${
            i === 0 ? "bg-black" : ""
          }`}
          key={i}
        >
          {button}
        </div>
      ))}
    </div>
  );
};

export default ButtonContainer;
