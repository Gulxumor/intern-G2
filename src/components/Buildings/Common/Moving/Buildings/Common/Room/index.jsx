import dayjs from "dayjs";
import { LoadingOutlined } from "@ant-design/icons";
import { Room } from "../../../../../../../generic/Style";
import { useQueryHandler } from "../../../../../../../hooks/useQuery";

const RoomComponent = (value) => {
  const { userID } = value;
  const { data, isLoading } = useQueryHandler({
    queryKey: `user/${userID}`,
    queryLink: `accomodation/2/user?_id=${userID}`,
  });
  return (
    <Room color="red">
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(new Date(+data?.endDate)).diff(new Date(), "d")
      )}
    </Room>
  );
};

export default RoomComponent;
