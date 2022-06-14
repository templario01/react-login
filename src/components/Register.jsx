import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const submit = async (e) => {
    e.prevent.default();

    await axios.post("http://localhost:3000/api/v1/auth/signup", {
      name,
      lastName,
      email,
      password,
    });

    setNavigate(true);

    if (navigate) {
      return <Navigate to="/" />;
    }
  };

  return (
    <div className="container h-full max-w-full flex justify-center items-center">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={submit}
        >
          <h1 className="font-bold text-3xl text-center text-gray-700 mt-3 mb-6">
            Sign Up
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border "
              id="firstname"
              type="text"
              placeholder=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border "
              id="lastname"
              type="text"
              placeholder=""
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              E-mail
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
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border"
              id="password"
              type="password"
              placeholder="+6 characters, 1 capital letter"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
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
