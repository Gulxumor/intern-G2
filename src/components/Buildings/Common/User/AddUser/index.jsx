import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchAddUserModalVisibility } from "../../../../../redux/modalSlice";
import OridinaryUser from "./OridinaryUser";
import VoucherUser from "./VoucherUser";

const AddUser = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { userAddModalVisibility } = useSelector((state) => state.modal);
  const [modalType, setModalType] = useState(t("modal.oridinary"));
  return (
    <Modal
      open={userAddModalVisibility}
      onCancel={() => dispatch(switchAddUserModalVisibility())}
      title={t("modal.add_booking")}
      okText={t("empty_places.information.add")}
      footer={false}
    >
      <Segmented
        block
        options={[t("modal.oridinary"), t("modal.voucher")]}
        onChange={(e) => setModalType(e)}
      />
      {modalType === t("modal.oridinary") ? <OridinaryUser /> : <VoucherUser />}
    </Modal>
  );
};

export default AddUser;
