import { Modal } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import SegmentedSection from "./Segmented";

const UserModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { userModalVisibility } = useSelector((state) => state.modal);
  return (
    <Modal
      title={t("empty_places.information.information_about_user")}
      open={userModalVisibility}
      onCancel={() => dispatch(switchUserModalVisibility())}
      onOk={() => dispatch(switchUserModalVisibility())}
      footer={false}
    >
      <SegmentedSection />
    </Modal>
  );
};

export default UserModal;
 