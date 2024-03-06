import React from "react";
import FormLogin from "./FormLogin";

const Login = () => {
  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <FormLogin />
      </div>
      <div className="hidden relative lg:flex  bg-gray-200 w-1/2 items-center justify-center">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
};
export default Login;
