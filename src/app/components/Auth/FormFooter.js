import React from "react";

const FormFooter = () => {
  return (
    <p className="text-sm text-gray-400">
      By continuing, you agree to jofind
      <span className="text-blue-400 cursor-pointer hover:underline">
        &nbsp;Term of Use
      </span>{" "}
      and confirm that you have read
      <span className="text-blue-400 cursor-pointer hover:underline">
        &nbsp;Privacy Policy
      </span>
    </p>
  );
};

export default FormFooter;
