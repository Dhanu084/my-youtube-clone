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
    <div className='invisible sm:visible grid grid-flow-col sm:my-4 max:auto sm:mx-2'>
      {buttons.map((button, i) => (
        <div
          className={`h-7  col-span-4 px-4 rounded-lg mx-2 text-center  bg-gray-100 ${
            i === 0 ? "bg-black" : ""
          } cursor-pointer hover:bg-black hover:text-white`}
          key={i}
        >
          {button}
        </div>
      ))}
    </div>
  );
};

export default ButtonContainer;
