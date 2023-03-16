import { Link } from "react-router-dom";
import Arrow from "../components/Arrow";

const NotFound = () => {
  return (
    <div className="relative flex h-screen w-screen justify-center overflow-hidden">
      <Link
        to="/"
        className="absolute left-0 ml-[1rem] mt-[1rem] animate-[slide-in_0.6s_ease-in-out_forwards] duration-300 hover:text-highlight-cyan active:scale-90"
      >
        <Arrow notFound />
      </Link>
      <div className="flex h-full w-11/12 max-w-[80rem] flex-wrap items-center justify-center  2xs:w-10/12">
        <div className="flex flex-col items-center justify-center gap-y-1 sm:gap-y-3">
          <h1 className="text-5xl text-highlight-pink sm:text-7xl">404</h1>
          <h1 className="text-4xl sm:text-5xl">Page Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
