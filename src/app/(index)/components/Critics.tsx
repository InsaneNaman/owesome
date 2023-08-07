"use client";

import { useLottie } from "lottie-react";
import { Spinner } from "@nextui-org/react";
import ReviewLottie from "../../../../public/lottie/review.json";
import { useState } from "react";

const Issues = () => {
  return (
    <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
      <ul className="space-y-4">
        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#D50000"
                d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18s18-8.1 18-18S33.9 6 24 6zm0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14zm0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Fake and Manipulated Reviews
          </span>
        </li>

        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#D50000"
                d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18s18-8.1 18-18S33.9 6 24 6zm0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14zm0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Review Removal and Filtering
          </span>
        </li>

        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#D50000"
                d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18s18-8.1 18-18S33.9 6 24 6zm0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14zm0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Less Transparency and Trustworthiness
          </span>
        </li>

        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#D50000"
                d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18s18-8.1 18-18S33.9 6 24 6zm0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14zm0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Less features for businesses
          </span>
        </li>

        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#D50000"
                d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18s18-8.1 18-18S33.9 6 24 6zm0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14zm0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Review Removal and Filtering
          </span>
        </li>
      </ul>
    </div>
  );
};

const Solutions = () => {
  return (
    <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
      <ul className="space-y-4">
        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#8BC34A"
                d="m24 3l4.7 3.6l5.8-.8l2.2 5.5l5.5 2.2l-.8 5.8L45 24l-3.6 4.7l.8 5.8l-5.5 2.2l-2.2 5.5l-5.8-.8L24 45l-4.7-3.6l-5.8.8l-2.2-5.5l-5.5-2.2l.8-5.8L3 24l3.6-4.7l-.8-5.8l5.5-2.2l2.2-5.5l5.8.8z"
              />
              <path
                fill="#CCFF90"
                d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Authentic Profile - Login with Google/Apple/Microsoft
          </span>
        </li>
        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#8BC34A"
                d="m24 3l4.7 3.6l5.8-.8l2.2 5.5l5.5 2.2l-.8 5.8L45 24l-3.6 4.7l.8 5.8l-5.5 2.2l-2.2 5.5l-5.8-.8L24 45l-4.7-3.6l-5.8.8l-2.2-5.5l-5.5-2.2l.8-5.8L3 24l3.6-4.7l-.8-5.8l5.5-2.2l2.2-5.5l5.8.8z"
              />
              <path
                fill="#CCFF90"
                d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Using AI to detect if a certain review/profile is fake
          </span>
        </li>

        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#8BC34A"
                d="m24 3l4.7 3.6l5.8-.8l2.2 5.5l5.5 2.2l-.8 5.8L45 24l-3.6 4.7l.8 5.8l-5.5 2.2l-2.2 5.5l-5.8-.8L24 45l-4.7-3.6l-5.8.8l-2.2-5.5l-5.5-2.2l.8-5.8L3 24l3.6-4.7l-.8-5.8l5.5-2.2l2.2-5.5l5.8.8z"
              />
              <path
                fill="#CCFF90"
                d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            {`Reddit's like reputation system`}
          </span>
        </li>

        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#8BC34A"
                d="m24 3l4.7 3.6l5.8-.8l2.2 5.5l5.5 2.2l-.8 5.8L45 24l-3.6 4.7l.8 5.8l-5.5 2.2l-2.2 5.5l-5.8-.8L24 45l-4.7-3.6l-5.8.8l-2.2-5.5l-5.5-2.2l.8-5.8L3 24l3.6-4.7l-.8-5.8l5.5-2.2l2.2-5.5l5.8.8z"
              />
              <path
                fill="#CCFF90"
                d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Exclusive features for businesses so they can provide transparency
          </span>
        </li>
        <li className="flex items-center gap-2.5">
          <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 48 48"
            >
              <path
                fill="#8BC34A"
                d="m24 3l4.7 3.6l5.8-.8l2.2 5.5l5.5 2.2l-.8 5.8L45 24l-3.6 4.7l.8 5.8l-5.5 2.2l-2.2 5.5l-5.8-.8L24 45l-4.7-3.6l-5.8.8l-2.2-5.5l-5.5-2.2l.8-5.8L3 24l3.6-4.7l-.8-5.8l5.5-2.2l2.2-5.5l5.8.8z"
              />
              <path
                fill="#CCFF90"
                d="M34.6 14.6L21 28.2l-5.6-5.6l-2.8 2.8l8.4 8.4l16.4-16.4z"
              />
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            Providing repo points to businesses for providing transparency
          </span>
        </li>
      </ul>
    </div>
  );
};

function Critics() {
  const [shouldShowSolutions, setShouldShowSolutions] = useState(false);
  const { View, animationLoaded } = useLottie({
    animationData: ReviewLottie,
    loop: true,
  });

  return (
    <section className=" antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:pb-24 lg:pt-14">
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-20 lg:gap-16 lg:grid-cols-2">
          <div className="hidden lg:flex lg:justify-center lg:items-center w-10/12">
            <>{View}</>
            {animationLoaded ? (
              <>{View}</>
            ) : (
              <Spinner size={"lg"} color={"success"} />
            )}
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                {"What the trust?"}
              </h2>
              <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                {`Wait! Let's look at some common issues that we encounter while using
                apps available in the market before coming to the solution.`}
              </p>
            </div>
            <div className="fadeIn-2s" key={shouldShowSolutions.toString()}>
              {shouldShowSolutions ? <Solutions /> : <Issues />}
            </div>

            <div className="flex items-center gap-4">
              <button
                className="text-white justify-center inline-flex items-center  font-medium rounded-lg text-sm px-5 py-2.5 text-center  align-middle bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                role="button"
                onClick={() => setShouldShowSolutions(!shouldShowSolutions)}
              >
                {shouldShowSolutions ? "See Issues" : "See Solutions"}
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Critics;
