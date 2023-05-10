import { useEffect } from "react";
import { useState } from "react";
import { Room } from "../../../../generic/Style";
import useAxios from "../../../../hooks/useAxios";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

const OccupiedRoom = ({ userID }) => {
  const axios = useAxios();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  //   const queryClient = useQueryClient();

  useEffect(() => {
    axios({ url: `/accomodation/2/user?_id=${userID}` }).then((data) => {
      setLoading(false);
      setData(data.data.data);
    });
  }, []);
  return (
    <Room color={"red"}>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(new Date(+data.endDate)).diff(new Date(), "d")
      )}
    </Room>
  );
};

export default OccupiedRoom;
