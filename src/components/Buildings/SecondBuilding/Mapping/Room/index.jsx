import { Room } from "../../../../../generic/Style";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQueryHandler } from "../../../../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";

const OccupiedRoom = ({ clienteValue, roomValue }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQueryHandler({
    queryKey: `user/${clienteValue.userID}`,
    queryLink: `/accomodation/2/user?_id=${clienteValue.userID}`,
  });
  const roomClickDetector = () => {
    dispatch(switchUserModalVisibility());
    dispatch(
      setSelectedUser({
        userID: clienteValue.userID,
        buildingMutation: "2",
        clienteValue,
        roomValue,
      })
    );
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
