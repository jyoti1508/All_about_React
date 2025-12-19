import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center bg-sky-900 h-screen items-center">
      <div className="bg-white rounded rounded-l w-300px p-4">
        <div className="mb-5 ">
          <button
            className={
              isLogin
                ? "text-sm bg-gray-800 px-11 py-2 rounded-t-lg text-gray-300"
                : "text-sm px-11 py-2 rounded-t-lg  bg-gray-100"
            }
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={
              !isLogin
                ? "text-sm bg-gray-800 px-10 py-2 rounded-t-lg text-gray-300"
                : "text-sm px-10 py-2 rounded-t-lg  bg-gray-100"
            }
            onClick={() => setIsLogin(false)}
          >
            Singup
          </button>
        </div>
        {isLogin ? (
          <>
            <h1 className="text-lg font-bold text-black-700 mb-5">
              Login Form
            </h1>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-400 rounded p-1"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-400 rounded p-1"
              />
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-blue-700">
                Forgot password?
              </a>
            </div>
            <p className="bg-gray-900 rounded p-1 text-gray-200 text-center mt-5">
              Login
            </p>
            <p className="text-center mt-2">
              Not a member?
              <span className="text-blue-700">
                <a href="#" onClick={() => setIsLogin(false)}>
                  {" "}
                  Singup now
                </a>
              </span>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold text-gray-900 mb-5">
              Singup Form
            </h1>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-400 rounded p-1"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-gray-400 rounded p-1"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="border border-gray-400 rounded p-1"
              />
            </div>
            <p className="bg-gray-900 rounded p-1 text-gray-200 text-center mt-5">
              Singup
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
