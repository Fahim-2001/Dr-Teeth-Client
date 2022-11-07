import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../images/logo.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="px-4 py-8 text-white footer  ">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full dark:bg-violet-400">
            <Link>
              <img src={logo} alt="" style={{ height: "50px" }} />
            </Link>
          </div>
          <ul className="flex flex-wrap items-center space-x-4 sm:space-x-8">
            <li>
              <Link
                rel="noopener noreferrer"
                className="hover:text-sky-400"
                href="#"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                className="hover:text-sky-400"
                href="#"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <Link
              rel="noopener noreferrer"
              className="hover:text-sky-400"
              href="#"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              className="hover:text-sky-400"
              href="#"
            >
              Facebook
            </Link>
          </li>
          <li>
            <Link
              rel="noopener noreferrer"
              className="hover:text-sky-400"
              href="#"
            >
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
