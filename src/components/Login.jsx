import axios from "axios";
import React, { useState } from "react";
// import { Navigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [msgError, setMsgError] = useState("");

  // const [navigate, setNavigate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    console.log("login...");

    await axios
      .post("http://localhost:3000/api/v1/auth/signin", {
        email,
        password,
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 404) {
          setMsgError("Invalid user or password");
        }
        setError(true);
      });

    // if (navigate) {
    //   return <Navigate to="/" />;
    // }
  };

  const closeAlert = (e) => {
    setError(false);
  };

  const validateInput = async (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setEmailError(true);
    } else if (password.length === 0) {
      setPasswordError(true);
    } else {
      await submit(e);
    }
  };

  return (
    <div className="container h-full max-w-full flex justify-center items-center">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={validateInput}
          onChange={(e) => {
            setError(false);
            setEmailError(false);
            setPasswordError(false);
          }}
        >
          <h1 className="font-bold text-3xl text-center text-gray-700 mt-3 mb-6">
            Welcome Back
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border "
              id="username"
              type="text"
              placeholder="example@mail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailError && (
              <p className="text-red-500 text-xs italic">
                Please enter your email.
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {passwordError && (
              <p className="text-red-500 text-xs italic">
                Please enter your password.
              </p>
            )}
          </div>
          {error && (
            <div
              id="login-alert"
              style={{ display: error ? "block" : "none" }}
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-3"
              role="alert"
            >
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">&nbsp;{msgError}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  onClick={closeAlert}
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <div className="flex items-center justify-between w-full">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Victor Benavente. All rights reserved.
        </p>
      </div>
    </div>
  );
};
