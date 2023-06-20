import { useDispatch } from "react-redux";
import { Room } from "../../../../../generic/Style";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";

const BookedRoom = ({roomValue, clienteValue}) => {
  const dispatch = useDispatch();

  return (
    <Room
      onClick={() => {
        dispatch(switchUserModalVisibility());
        dispatch(
          setSelectedUser({
            userID: clienteValue.userID,
            buildingMutation: "3",
            clienteValue,
            roomValue,
          })
        );
      }}
      color={"processing"}
    />
  );
};

export default BookedRoom;
