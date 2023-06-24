import { Room } from "../../../../../generic/Style";
import { useDispatch } from "react-redux";
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
            buildingMutation: "5-2",
            clienteValue,
            roomValue,
          })
        );
      }}
    />
  );
};

export default BookedRoom;
