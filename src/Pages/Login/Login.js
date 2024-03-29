import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContexts/AuthProvider";
import useTitle from "../../Utilities/useTitle";

const Login = () => {
  const { user, signIn, googleSignIn } = useContext(AuthContext);
  useTitle("Login");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(provider)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="w-3/4 mx-auto  p-4 rounded-md shadow sm:p-8 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>
      <form
        className="space-y-8 ng-untouched ng-pristine ng-valid "
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm text-left">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="input w-full  input-bordered"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-400"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="input w-full  input-bordered"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 text-gray-700 font-semibold rounded-md hover:bg-gray-700 hover:text-white"
        >
          Sign in
        </button>
      </form>
      <div className="flex items-center w-full my-4">
        <hr className="w-full dark:text-gray-400" />
        <p className="px-3 dark:text-gray-400">OR</p>
        <hr className="w-full dark:text-gray-400" />
      </div>
      <p className="text-sm text-center dark:text-gray-400">
        Don't have account?{" "}
        <Link
          to="/signup"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Sign up
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <button
          onClick={handleGoogleSignIn}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
