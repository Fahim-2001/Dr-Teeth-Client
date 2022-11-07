import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100 header">
      <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/home"
              className="flex items-center px-4 -mb-1  text-xl hover:text-sky-400 text-white hover:border-t-2 hover:border-b-2"
            >
              Home
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/services"
              className="flex items-center px-4 -mb-1  text-xl hover:text-sky-400 text-white hover:border-t-2 hover:border-b-2 dark:text-violet-400 dark:border-violet-400"
            >
              Services
            </Link>
          </li>
        </ul>
        <Link
          rel="noopener noreferrer"
          to="/home"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src={logo}
            alt=""
            style={{ height: "50px", borderRadius: "50%", margin: "10px" }}
          />
          <p className="text-xl  text-white">Dr. Teeth</p>
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/blog"
              className="flex items-center px-4 -mb-1  text-xl hover:text-sky-400 text-white hover:border-t-2 hover:border-b-2"
            >
              Blog
            </Link>
          </li>
          <li className="flex">
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="flex items-center px-4 -mb-1  text-xl hover:text-sky-400 text-white hover:border-t-2 hover:border-b-2"
            >
              Login
            </Link>
          </li>
        </ul>
        <button title="Button" type="button" className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
