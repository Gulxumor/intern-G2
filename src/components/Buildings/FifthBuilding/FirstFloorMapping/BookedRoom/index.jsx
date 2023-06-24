import { Room } from "../../../../../generic/Style";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";

const BookedRoom = ({ clienteValue, roomValue }) => {
  const dispatch = useDispatch();
  return (
    <Room
      color={"processing"}
      onClick={() => {
        dispatch(switchUserModalVisibility());
        dispatch(
          setSelectedUser({
            userID: clienteValue.userID,
            buildingMutation: "5-1",
            clienteValue,
            roomValue,
          })
        );
      }}
    />
  );
};

export default BookedRoom;
