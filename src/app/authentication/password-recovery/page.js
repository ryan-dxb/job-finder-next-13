import React from "react";
import Heading from "../../components/Auth/FormHeading";
import SubHeading from "../../components/Auth/FormSubHeading";
import Button from "../../components/Button";
import FormInput from "../../components/Auth/FormInput";
import FormFooter from "../../components/Auth/FormFooter";
import { AiFillLinkedin } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <>
      {/* Left */}
      <div className="flex flex-col items-center justify-center w-[45%] ">
        <div className="max-w-[75%] xl:max-w-[50%]">
          <div className="mb-10">
            <Heading className="mb-4" text="Recover Password" />
            <SubHeading text="We will send a new password to your account from email, to help recover your account." />
          </div>

          <form action="">
            <FormInput name="Email" labelName="Email" required type="email" />
          </form>

          <Button className="mt-14" variant="filled" icon={<BsChevronRight />}>
            Sign Up
          </Button>
          <div className="flex items-center justify-center mt-10">
            <p className="text-lg text-gray-400">
              Remember password?
              <span className="text-blue-600">&nbsp;Login</span>
            </p>
          </div>

          <div className="mt-14 flex items-center justify-center text-center">
            {/* Footer */}
            <FormFooter />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex w-[55%] bg-blue-50"></div>
    </>
  );
};

export default Login;
