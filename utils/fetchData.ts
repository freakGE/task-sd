type FetchDataTypes = {
  url?: string;
  page: number;
  size?: number;
  userId?: number;
  singleUser?: boolean;
};

const fetchData = async ({
  url = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user",
  page,
  size = 25,
  userId,
  singleUser,
}: FetchDataTypes) => {
  let finalUrl: RequestInfo | URL;

  if (userId) {
    if (singleUser) {
      finalUrl = `${url}/${userId}`;
    } else {
      finalUrl = `${url}/${userId}/friends/${page}/${size}`;
    }
  } else {
    finalUrl = `${url}/${page}/${size}`;
  }

  const res = await fetch(finalUrl);

  const data = await res.json();
  return data;
};

export default fetchData;
