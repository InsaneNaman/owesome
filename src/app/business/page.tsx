"use client";

import { Chip } from "@nextui-org/react";

function Business() {
  return (
    <div className="flex flex-col max-w-screen-xl px-4 py-8 mx-auto lg:py-20 justify-center items-center h-[80vh]">
      <Chip className="mb-4 animate-bounce" color="warning" variant="dot">
        Coming Soon
      </Chip>

      <h1 className="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          AI powered Customer Support
        </span>{" "}
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:py-5 lg:text-xl dark:text-gray-400 text-center">
        {`Elevate your startup's customer engagement on Twitter, Reddit, and
        beyond with our advanced AI Assistant. Seamless, efficient, and
        user-focused support to supercharge your growth`}
      </p>
    </div>
  );
}

export default Business;
