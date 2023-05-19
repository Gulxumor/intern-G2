import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import SegmentedSection from "./Segmented";

const UserModal = () => {
  const dispatch = useDispatch();
  const { userModalVisibility } = useSelector((state) => state.modal);
  return (
    <Modal
      title="UserModal"
      open={userModalVisibility}
      onCancel={() => dispatch(switchUserModalVisibility())}
      onOk={() => dispatch(switchUserModalVisibility())}
    >
      <SegmentedSection />
    </Modal>
  );
};

export default UserModal;
 