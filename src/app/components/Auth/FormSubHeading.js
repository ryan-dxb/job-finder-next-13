import React from "react";

const SubHeading = ({ text }) => {
  return (
    <div className="flex flex-row items-center text-start text-lg font-normal text-neutral-400">
      {text}
    </div>
  );
};

export default SubHeading;
