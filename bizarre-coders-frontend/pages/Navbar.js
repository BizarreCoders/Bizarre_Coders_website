import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import logo from "./assets/Bizarre_Coders_logo.png";
import githublogo from "./assets/github.png";
import Testimonials from "./Testimonials";

function Navbar() {
  // const router = useRouter();
  return (
    <div className="w-full h-20">
      <nav className="bg-canva_nav">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center text-white">
            {/* <Image src={logo} classsName="w-20 h-20" alt="Logo" /> */}
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  className="text-whitee transition duration-300 ease-in-out hover:text-opacity-75"
                  onClick={() => router.push("/home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="text-whitee transition duration-300 ease-in-out hover:text-opacity-75"
                  onClick={
                    () => router.push("/About")
                    // component ={<About />}
                  }
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="text-whitee transition duration-300 ease-in-out hover:text-opacity-75"
                  onClick={() => router.push("/testimonial")}
                  element={Testimonials}
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  className="text-whitee transition duration-300 ease-in-out hover:text-opacity-75"
                  onClick={() => router.push("/team")}
                >
                  Team
                </button>
              </li>
              
              <li>
                <button
                  className="text-whitee transition duration-300 ease-in-out hover:text-opacity-75"
                  onClick={() => router.push("JoinUs")}
                >
                  Join Us
                </button>
              </li>
              <li>
                <Link
                  href="https://github.com/ARYAN-CODES-STAR/Bizarre-Coders-Website"
                  className="flex ml-16"
                >
                  <Image
                    src={githublogo}
                    target="https://github.com/ARYAN-CODES-STAR/Bizarre-Coders-Website"
                    className="w-6 h-6 px-0"
                    alt="Logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
