import React from "react";
import classNames from "classnames";

const Button = ({ children, social, icon, variant, className }) => {
  return (
    <button
      className={classNames(
        "w-full h-12 mt-4 rounded-md relative flex items-center justify-center",
        variant === "outline" &&
          "bg-transparent border border-gray-500 text-gray-800",
        variant === "filled" && "bg-blue-600 text-white",
        className
      )}
    >
      {icon && social && <div className="absolute left-2 text-3xl">{icon}</div>}
      {children}
      {icon && !social && <div className="ml-2 text-md">{icon}</div>}
    </button>
  );
};

export default Button;
