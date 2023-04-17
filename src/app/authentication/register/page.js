import React from "react";
import Heading from "../../components/Auth/FormHeading";
import SubHeading from "../../components/Auth/FormSubHeading";
import Button from "../../components/Button";
import FormInput from "../../components/Auth/FormInput";
import { BsChevronRight } from "react-icons/bs";
import FormFooter from "../../components/Auth/FormFooter";

const Register = () => {
  return (
    <>
      {/* Left */}
      <div className="flex flex-col items-center justify-center w-[45%] ">
        <div className="max-w-[75%] xl:max-w-[50%]">
          <div className="mb-10">
            <Heading className="mb-4" text="Create Your Account" />
            <SubHeading text="Help us get to know you from the information you provide to get free access to jofind." />
          </div>

          <form action="">
            <FormInput
              name="Username"
              labelName="Username"
              required
              type="text"
            />
            <FormInput name="Email" labelName="Email" required type="email" />
            <FormInput
              name="Password"
              labelName="Password"
              required
              type="password"
            />
            <div>{/* Password Strength */}</div>
          </form>

          <Button className="mt-14" variant="filled" icon={<BsChevronRight />}>
            Sign Up
          </Button>
          <div className="flex items-center justify-center mt-10">
            <p className="text-lg text-gray-400">
              Already have an account?
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

export default Register;
