import Link from "next/link";

// components
import Critics from "./components/Critics";
import NewsLetter from "./components/NewsLetter";

function Page() {
  return (
    <>
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              TrustPilot For{" "}
              <span className="text-gradient text-gradient-to-r from-violet-500 to-blue-700 dark:text-primary-500">
                Web
              </span>{" "}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-10 md:text-lg lg:text-xl dark:text-gray-400">
              Review any website, boost trustworthiness - Install now.
            </p>
            <div className="items-center justify-between p-4 mb-4 space-y-4 bg-gray-100 rounded-lg dark:bg-gray-700 sm:flex sm:space-y-0">
              <div className="lg:mr-8">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  Chrome
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  For Chromium version 114 or later
                </div>
              </div>
              <div className="lg:mr-8">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  Firefox
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Coming Soon
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-white align-middle bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5 mr-2 -ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  ></path>
                </svg>
                Download for Chrome
              </a>
            </div>
            <div className="text-sm text-gray-500">
              By using Flowbite, you agree to its{" "}
              <Link
                href="/terms"
                className="text-primary-600 dark:text-primary-500 hover:underline"
              >
                license
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="text-primary-600 dark:text-primary-500 hover:underline"
              >
                privacy statement
              </Link>
              .
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="rounded-lg shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/text-editor-light.svg"
              alt="mockup light"
            />
            <img
              className="rounded-lg shadow-lg hidden dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/text-editor-dark.svg"
              alt="mockup dark"
            />
          </div>
        </div>
      </section>
      <section className=" flex max-w-screen-xl px-4 py-8 mx-auto lg:py-16 justify-center items-center">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          For those who take Feedback{" "}
          <span className="underline decoration-pink-500">seriously!</span>
        </h1>
      </section>
      <Critics />
      <NewsLetter />
    </>
  );
}

export default Page;
