import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../atom/loginState";

export default function SignIn() {
  const [isActive, setIsActive] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const updateModalState = () => setIsActive(!isActive);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  let handleloginState = () => {
    setIsLoggedIn(true);
  };

  let handleloginModal = () => {
    if (isSignIn === true) {
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
    }
  };

  return (
    <>
      <button
        className="btn bg-steelblue text-sm"
        type="button"
        data-modal-toggle="authentication-modal"
        onClick={updateModalState}
      >
        Login/Register
      </button>
      {isActive == true ? (
        isSignIn == true ? (
          <div
            id="authentication-modal"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
          >
            <div className="flex h-screen justify-center items-center">
              <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex justify-end p-2">
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-toggle="authentication-modal"
                      onClick={updateModalState}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <form
                    className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                    action="#"
                  >
                    <h3 className="text-xl font-medium text-gray-900 dark:text-black">
                      Sign in to our platform
                    </h3>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required=""
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="font-medium text-gray-900 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                      >
                        Lost Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{ backgroundColor: "skyblue" }}
                      onClick={handleloginState}
                    >
                      Login to your account
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Not registered?{" "}
                      <a
                        href="#"
                        className="text-blue-800 hover:underline dark:text-blue-500"
                        style={{ color: "blue" }}
                        onClick={handleloginModal}
                      >
                        Create account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="authentication-modal"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
          >
            <div className="flex h-screen justify-center items-center">
              <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex justify-end p-2">
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-toggle="authentication-modal"
                      onClick={updateModalState}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <form
                    className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                    action="#"
                  >
                    <h3 className="text-xl font-medium text-gray-900 dark:text-black">
                      Sign up to our platform
                    </h3>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your Name/Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="example"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@company.com"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Your password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required=""
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      style={{ backgroundColor: "skyblue" }}
                      // onClick={handleloginState}
                    >
                      Create your account
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Already registered?{" "}
                      <a
                        href="#"
                        className="text-blue-800 hover:underline dark:text-blue-500"
                        style={{ color: "blue" }}
                        onClick={handleloginModal}
                      >
                        Login
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )
      ) : null}
    </>
  );
}
