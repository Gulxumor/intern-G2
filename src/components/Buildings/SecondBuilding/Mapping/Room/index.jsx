import { Room } from "../../../../../generic/Style";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQueryHandler } from "../../../../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { switchSetSelectedUserID } from "../../../../../redux/userSlice";

const OccupiedRoom = ({ userID }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQueryHandler({
    queryKey: `user/${userID}`,
    queryLink: `/accomodation/2/user?_id=${userID}`,
  });
  const roomClickDetector = () => {
    dispatch(switchUserModalVisibility());
    dispatch(switchSetSelectedUserID(userID));
  };
  return (
    <Room color={"red"} onClick={() => roomClickDetector()}>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(new Date(+data?.endDate)).diff(new Date(), "d")
      )}
    </Room>
  );
};

export default OccupiedRoom;
