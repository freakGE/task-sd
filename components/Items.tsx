import { Link } from "react-router-dom";

type ItemsProps = {
  data: any[];
  visitedLinks?: any[];
  setVisitedLinks?: React.Dispatch<React.SetStateAction<any[]>>;
};
const Items = ({ data, visitedLinks, setVisitedLinks }: ItemsProps) => {
  const handleClick = (user: any) => {
    if (!visitedLinks || !setVisitedLinks) return;
    setVisitedLinks([...visitedLinks, user]);
  };
  return (
    <>
      {data.map((user: any) => {
        const name = `${user.prefix} ${user.name} ${user.lastName}`;
        return (
          <Link
            to={`/user/${user.id}`}
            key={user.id}
            className="flex w-fit flex-col justify-center gap-y-1 overflow-hidden rounded-lg bg-dark-200 shadow-lg ring-highlight-cyan delay-100 duration-300 hover:scale-[1.04] hover:shadow-xl hover:ring-2 2xs:w-[calc((1/2*100%)-1rem)] lg:w-[calc((1/3*100%)-1rem)] xl:w-[calc((1/4*100%)-1rem)] 2xl:2xl:w-[calc((1/5*100%)-1rem)]"
            onClick={() => handleClick(user)}
          >
            <img
              src={`${user.imageUrl}/v=${user.id}`}
              alt={name}
              className="flex h-full min-h-[calc(480px*0.45)] w-full min-w-[calc(640px*0.45)] items-center justify-center bg-dark-150 object-cover"
            />
            <div className="flex w-full flex-col items-center justify-center px-2 pb-1">
              <h3 className="text-lg font-bold ">{name}</h3>
              <p className="text-center">{user.title}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Items;
