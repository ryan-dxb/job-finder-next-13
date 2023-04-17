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
            <Heading className="mb-4" text="Welcome to JoFind" />
            <SubHeading text="Continue with your social media account" />
          </div>
          <div className="mb-10">
            {/* Social Button */}
            <Button
              variant="outline"
              social="Linkedin"
              icon={<AiFillLinkedin />}
            >
              Sign in with Linkedin
            </Button>
            <Button variant="outline" social="Google" icon={<FcGoogle />}>
              Sign in with Google
            </Button>
          </div>
          <div className="relative flex py-5 items-center w-full mb-10">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="flex-shrink mx-4 text-gray-400">
              Or login with accound details
            </span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <form action="">
            <FormInput
              name="Username"
              labelName="Username"
              required
              type="text"
            />
            <FormInput
              name="Password"
              labelName="Password"
              required
              type="password"
            />
          </form>
          <div className="flex flex-row justify-between mt-8 ">
            <div class="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="default-checkbox" class="ml-2 text-lg text-gray-400 ">
                Remember me
              </label>
            </div>
            <div>
              <p className="text-lg text-blue-600 cursor-pointer">
                Forgot your password?
              </p>
            </div>
          </div>

          <Button className="mt-14" variant="filled" icon={<BsChevronRight />}>
            Sign In
          </Button>
          <div className="flex items-center justify-center mt-10">
            <p className="text-lg text-gray-400">
              Join with us?
              <span className="text-blue-600">
                &nbsp;Create account it’s free
              </span>
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
