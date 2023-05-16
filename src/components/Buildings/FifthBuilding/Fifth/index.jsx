import { Room } from "../../../../generic/Style";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQueryHandler } from "../../../../hooks/useQuery";

const Fifth = ({ userID }) => {
  const { data, isLoading } = useQueryHandler({
    queryKey: `user/${userID}`,
    queryLink: `/accomodation/5/user?_id=${userID}`,
  });

  return (
    <Room color={"red"}>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(new Date(+data?.data?.data?.endDate)).diff(new Date(), "d")
      )}
    </Room>
  );
};

export default Fifth;
