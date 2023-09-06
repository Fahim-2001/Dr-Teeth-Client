import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContexts/AuthProvider";
import logo from "../../../../images/logo.jpg";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((e) => console.log(e));
  };

  <img
    src={logo}
    alt=""
    style={{ height: "50px", borderRadius: "50%", margin: "10px" }}
  />;
  return (
    <nav className="px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              {user?.uid ? (
                <>
                  <Link to="/myreviews">My Reviews</Link>

                  <Link to="/addservice">Add Service</Link>

                  <Link to="/logout" onClick={handleLogOut}>
                    Logout
                  </Link>
                  <div className="avatar placeholder">
                    <PhotoProvider
                      speed={() => 800}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                    >
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <PhotoView
                          src={user ? user.photoURL : <p>MX</p>}
                          style={{ objectFit: "cover" }}
                        >
                          <img src={user ? user.photoURL : <p>MX</p>} alt="" />
                        </PhotoView>
                      </div>
                    </PhotoProvider>
                    <p>{user?.displayName}</p>
                  </div>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/home" className="flex items-center">
          <img
            src={logo}
            alt=""
            style={{ height: "50px", borderRadius: "50%", margin: "10px" }}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Dr. Teeth
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto " id="mobile-menu">
          <ul className="flex flex-col items-center p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/home"
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
            <li>
              {user?.uid ? (
                <div className="flex items-center">
                  <Link
                    to="/myreviews"
                    className="block py-2 mr-4 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    My Reviews
                  </Link>
                  <Link
                    to="/addservice"
                    className="block py-2 mr-4 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Add Service
                  </Link>
                  <Link
                    to="/logout"
                    onClick={handleLogOut}
                    className="block py-2 mr-4 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Logout
                  </Link>
                  <div className="avatar placeholder">
                    <PhotoProvider
                      speed={() => 800}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                    >
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                        <PhotoView
                          src={user ? user.photoURL : <p>MX</p>}
                          style={{ objectFit: "cover" }}
                        >
                          <img src={user ? user.photoURL : <p>MX</p>} alt="" />
                        </PhotoView>
                      </div>
                    </PhotoProvider>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
