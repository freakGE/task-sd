import fetchData from "../utils/fetchData";

interface UpdateDataProps {
  data: any;
  setData: React.Dispatch<any>;
  page: number;
  size?: number;
  userId?: number;
  singleUser?: boolean;
}

const updateData = async ({
  data,
  setData,
  page,
  size,
  userId,
  singleUser,
}: UpdateDataProps) => {
  let options: any;

  if (userId) {
    if (singleUser) {
      options = {
        page,
        userId,
        singleUser,
      };
    } else {
      options = {
        page,
        userId,
      };
    }
  } else {
    options = {
      page,
    };
  }
  const currentData = await fetchData(options);

  if (!data) {
    setData(currentData);
    return;
  }
  //   //! v1
  //   // const updatedList = [...data.list, ...currentData.list];
  //   // setData({ pagination: currentData.pagination, list: updatedList });
  //   //! v2
  const updatedList = [...data.list, ...currentData.list];

  const filteredList = updatedList
    .filter(
      (item, index, self) => self.findIndex(i => i.id === item.id) === index
    )
    .sort((a, b) => a.id - b.id)
    .reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, []);

  setData({
    pagination: currentData.pagination,
    list: Object.values(filteredList),
  });
};

export default updateData;
