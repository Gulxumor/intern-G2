import { Room } from "../../../../../generic/Style";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQueryHandler } from "../../../../../hooks/useQuery";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { useDispatch } from "react-redux";

const Fourth = ({ clienteValue, roomValue }) => {
  const { data, isLoading } = useQueryHandler({
    queryKey: `user/${clienteValue.userID}`,
    queryLink: `/accomodation/4/user?_id=${clienteValue.userID}`,
  });
  const dispatch = useDispatch();
  const roomClickDetector = () => {
    dispatch(switchUserModalVisibility());
    dispatch(
      setSelectedUser({
        userID: clienteValue.userID,
        buildingMutation: "4",
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

export default Fourth;
