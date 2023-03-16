import { useEffect, useState } from "react";
import updateData from "../utils/updateData";
import Items from "../components/Items";
import ScrollToTop from "../components/ScrollToTop";

const App = () => {
  const [data, setData] = useState<any>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    updateData({ data, setData, page });
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage(currentPage => currentPage + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex w-screen justify-center">
      <div className="my-[2rem] flex w-11/12 max-w-[80rem] flex-wrap justify-center gap-y-4 gap-x-4 2xs:w-10/12">
        {data?.list && <Items data={data.list} />}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
