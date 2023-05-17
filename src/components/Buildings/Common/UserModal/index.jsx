import { Modal, Segmented } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import Observing from "./User/Observing";
import Booked from "./User/Booked";

const UserModal = () => {
  const dispatch = useDispatch();
  const { userModalVisibility } = useSelector((state) => state.modal);
  return (
    <Modal
      title="UserModal"
      open={userModalVisibility}
      onCancel={() => dispatch(switchUserModalVisibility())}
    >
      <Segmented
        block
        defaultValue={"Observing"}
        options={["Observing", "Booking", "Editing"]}
      />
      <Observing />
      <Booked />
    </Modal>
  );
};

export default UserModal;
