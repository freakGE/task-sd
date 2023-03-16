import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import updateData from "../utils/updateData";
import Items from "../components/Items";
import Arrow from "../components/Arrow";
import ScrollToTop from "../components/ScrollToTop";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [friends, setFriends] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [visitedLinks, setVisitedLinks] = useState<any[]>([]);

  const refreshPage = () => {
    setUser(null);
    setFriends(null);
    setPage(1);
  };

  useEffect(() => {
    refreshPage();
  }, [id]);

  useEffect(() => {
    if (!id) return;
    updateData({
      data: user,
      setData: setUser,
      userId: parseInt(id),
      singleUser: true,
      page,
    });
  }, [id, user, friends]);

  useEffect(() => {
    if (!id) return;
    updateData({
      data: friends,
      setData: setFriends,
      page,
      userId: parseInt(id),
    });
  }, [page, id]);

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
    <div className="relative flex w-screen justify-center">
      <Link
        to="/"
        className="absolute left-0 ml-[1rem] mt-[1rem] animate-[slide-in_0.6s_ease-in-out_forwards] duration-300 hover:text-highlight-cyan active:scale-90"
      >
        <Arrow />
      </Link>

      <div className="my-[2rem] flex w-11/12 max-w-[80rem] flex-wrap justify-center gap-y-4 gap-x-4 2xs:w-10/12">
        {user && (
          <div className="flex w-full flex-col items-center gap-y-2 gap-x-[1rem] lg:flex-row lg:items-center">
            <img
              src={`${user.imageUrl}/v=${user.id}`}
              alt={`${user.prefix} ${user.name} ${user.lastName}`}
              className="3tems-center flex h-[calc(480px*0.45)] w-full min-w-[calc(640px*0.45)] justify-center rounded-md bg-dark-150 object-cover lg:min-w-[calc(640px*0.35)] xl:w-1/3 2xl:w-1/4"
            />
            <div className="flex w-full flex-col rounded-md md:flex-row md:gap-x-[1rem] ">
              <div className="relative mt-4 flex w-full flex-col rounded-md border border-dark-100 py-4 px-3 lg:mt-0">
                <span className="absolute top-[-0.9rem] bg-dark-300 px-2">
                  Info
                </span>
                <h3 className="h-full text-lg font-bold">{`${user.prefix} ${user.name} ${user.lastName}`}</h3>
                <p className="">{user.title}</p>
                <div className="mt-[0.5rem] border-t border-dark-100 pt-[0.5rem]">
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">Email:</h3>
                    <p className="text-dark-100">{user.email}</p>
                  </div>
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">Ip Address:</h3>
                    <p className="text-dark-100">{user.ip}</p>
                  </div>
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">Job Area:</h3>
                    <p className="text-dark-100">{user.jobArea}</p>
                  </div>
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">Job Type:</h3>
                    <p className="text-dark-100">{user.jobType}</p>
                  </div>
                </div>
              </div>
              <div className="relative mt-4 flex w-full flex-col rounded-md border border-dark-100 py-4 px-3 lg:mt-0">
                <span className="absolute top-[-0.9rem] bg-dark-300 px-2">
                  Address
                </span>
                <h3 className="h-full  text-lg font-bold">{`${user.company.name} ${user.company.suffix}`}</h3>
                <div className="mt-[0.5rem] w-full border-t border-dark-100 pt-[0.5rem]">
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">City:</h3>
                    <p className="text-dark-100">{user.address.city}</p>
                  </div>
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">Country:</h3>
                    <p className="text-dark-100">{user.address.country}</p>
                  </div>
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">State:</h3>
                    <p className="text-dark-100">{user.address.state}</p>
                  </div>
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">Street Address:</h3>
                    <p className="text-dark-100">
                      {user.address.streetAddress}
                    </p>
                  </div>
                  <div className="flex gap-x-2">
                    <h3 className="font-semibold">ZIP:</h3>
                    <p className="text-dark-100">{user.address.zipCode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {visitedLinks.length > 0 && (
          <div className="flex w-full flex-wrap">
            {visitedLinks.map((item, i) => {
              const name = `${item.prefix} ${item.name} ${item.lastName}`;
              return (
                <div className="whitespace-nowrap">
                  {" "}
                  <Link
                    to={`/user/${item.id}`}
                    key={item.id}
                    className="text-highlight-cyan underline duration-300 focus:text-highlight-pink"
                  >
                    {name}
                  </Link>
                  {visitedLinks.length - 1 !== i && (
                    <span className="px-1 text-dark-100">{">"}</span>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <h3 className="w-full text-2xl font-bold">Friends</h3>
        {friends?.list && (
          <Items
            data={friends.list}
            visitedLinks={visitedLinks}
            setVisitedLinks={setVisitedLinks}
          />
        )}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default UserDetails;
