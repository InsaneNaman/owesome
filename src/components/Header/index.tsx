"use client";

import Link from "next/link";
import { Badge } from "@nextui-org/react";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 backdrop-blur-lg">
      <nav className=" border-gray-200 px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
              src="/images/brand.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Owesome Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Owesome
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              href="/login"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className=" text-white align-middle bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  href="/"
                  className={`block py-2 pr-4 pl-3 text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:p-0 ${
                    pathname === "/"
                      ? "text-white drop-shadow-2xl font-medium"
                      : ""
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/features"
                  className={`block py-2 pr-4 pl-3 text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:p-0 ${
                    pathname === "/features"
                      ? "text-white drop-shadow-2xl font-medium"
                      : ""
                  }`}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={`block py-2 pr-4 pl-3 text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:p-0 ${
                    pathname === "/faq"
                      ? "text-white drop-shadow-2xl font-medium"
                      : ""
                  }`}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Badge
                  isDot
                  content="Soon"
                  color="primary"
                  className="top-[-2px]"
                >
                  <Link
                    href="/business"
                    className={`block py-2 pr-6 pl-3 text-gray-400 rounded bg-primary-700 lg:bg-transparent lg:p-0 ${
                      false ? "text-white drop-shadow-2xl font-medium" : ""
                    }`}
                  >
                    For Business {"  "}
                  </Link>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
