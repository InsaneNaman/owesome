//components
import FeatureTimeline from "./components/FeatureTimeline";

function Features() {
  return (
    <div className="flex flex-col max-w-screen-xl px-4 py-8 mx-auto lg:py-20 justify-center items-center">
      <h1 className="mb-4 text-3xl text-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        Unleash the Power of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Trusted Reviews
        </span>{" "}
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:py-5 lg:text-xl dark:text-gray-400 text-center">
        Discover Our Feature-Rich Platform for Authentic Feedback
      </p>
      <FeatureTimeline />
    </div>
  );
}

export default Features;
