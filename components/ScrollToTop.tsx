import { useEffect, useState } from "react";
import Arrow from "./Arrow";

const ScrollToTop = () => {
  const [currentScroll, setCurrentScroll] = useState(0);
  const [arrow, setArrow] = useState(false);
  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setArrow(currentScroll >= 250);
    const handleScroll = () => setCurrentScroll(scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentScroll]);

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-0 right-0 m-[1rem] duration-300 hover:text-highlight-cyan active:scale-90 "
      style={{
        transform: arrow ? "translateY(0rem)" : "translateY(6rem)",
      }}
    >
      <Arrow up />
    </button>
  );
};

export default ScrollToTop;
