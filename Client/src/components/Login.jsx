import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import LoadingSpinner from "./Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const SERVER_URL = process.env.BACKEND_URL || "http://localhost:3001";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await axios.post(`${SERVER_URL}/login/login`, {
        email,
        password,
      });
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id);
  
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Delay for 1500 milliseconds (1.5 seconds)
  
      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors.map((error) => error.msg));
      } else if (err.response && err.response.data.msg) {
        setErrors([err.response.data.msg]);
      } else {
        setErrors(["An error occurred. Please try again."]);
      }
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="absolute top-10 left-7">
        <Link
          to="/"
          className="px-4 py-2 rounded-ful font-bold bg-gradient-to-br h-20 w-40 transition-colors duration-300 ease-in-out"
        >
          <motion.span
            initial={{ opacity: 0, position: "relative", left: "-100px" }}
            animate={{ opacity: 1, position: "relative", left: "0px" }}
            transition={{ duration: 1.5 }}
          >
            <IoMdArrowRoundBack size={50} color="blue" />
          </motion.span>
        </Link>
      </div>
      <motion.form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleLogin}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          )}
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        {errors && (
          <div className="text-red-500 mt-7 font-medium text-center text-sm animate-bounce">
            {errors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </motion.form>
    </div>
  );
};

export default Login;
