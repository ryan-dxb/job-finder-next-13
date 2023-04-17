import React from "react";
import classNames from "classnames";

const Heading = ({ text, className }) => {
  return (
    <div
      className={classNames("text-3xl font-bold text-neutral-800", className)}
    >
      {text}
    </div>
  );
};

export default Heading;
