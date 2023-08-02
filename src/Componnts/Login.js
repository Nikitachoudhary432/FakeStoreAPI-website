import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        username: data.username,
        password: data.password,
      };
      axios
        .post("https://fakestoreapi.com/auth/login", userData)
        .then((response) => {
          console.log(response);
          localStorage.setItem("login", JSON.stringify(response.data));
          console.log('response', response.data)
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    };

  return (
    <div className="flex items-center bg-indigo-100 h-[100vh]">
      <div className="flex flex-col items-center  w-full ">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 rounded-xl p-5 text-left shadow-2xl h-[auto] lg:w-[400px] sm:w-[300px] sm:w-full md:w-[350px] md:w-full"
        >
          <h2>Login Page</h2>
          <div className="input-container">
            <span className="font-bold">Username : </span>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={handleChange}
              className="border-none bg-gray-200 rounded-lg h-[40px] m-3 pl-2"
              required
            />
          </div>
          <div className="input-container">
            <span className="font-bold">Password :</span>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="border-none bg-gray-200 rounded-lg h-[40px] m-3 pl-2"
              required
            />
          </div>
          <div className="input-container pb-4">
            <input type="checkbox" value="lsRememberMe" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="button-container pb-2 flex justify-center  ">
            <button className="bg-purple-700 h-[40px] w-[150px] rounded-lg text-white border-none">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
