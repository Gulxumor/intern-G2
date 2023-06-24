import { useDispatch } from "react-redux";
import { Room } from "../../../../../generic/Style";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";

const BookedRoom = ({ roomValue, clienteValue }) => {
  const dispatch = useDispatch();
  return (
    <Room
      color={"processing"}
      onClick={() => {
        dispatch(switchUserModalVisibility());
        dispatch(
          setSelectedUser({
            userID: clienteValue.userID,
            buildingMutation: "6-1",
            clienteValue,
            roomValue,
          })
        );
      }}
    />
  );
};

export default BookedRoom;
