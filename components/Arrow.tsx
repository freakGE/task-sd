import React from "react";

type ArrowProps = {
  up?: boolean;
  notFound?: boolean;
};
const Arrow = ({ up, notFound }: ArrowProps) => {
  return (
    <svg
      className={`h-[3rem] w-[3rem] lg:h-[3.5rem] lg:w-[3.5rem] ${
        !!up && "rotate-90"
      }
      ${
        !!notFound &&
        "sm:h-[3.5rem] sm:w-[3.5rem] 2md:h-[3.75rem] 2md:w-[3.75rem] lg:h-[4rem] lg:w-[4rem]"
      }
      `}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256zm212.65-91.36a16 16 0 01.09 22.63L208.42 240H342a16 16 0 010 32H208.42l52.32 52.73A16 16 0 11238 347.27l-79.39-80a16 16 0 010-22.54l79.39-80a16 16 0 0122.65-.09z"></path>
    </svg>
  );
};

export default Arrow;
