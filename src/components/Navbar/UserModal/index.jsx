import { useSelector, useDispatch } from "react-redux";
import { ModalWrapper, DisabledInputs, Avatar, Text } from "./style";
import { switchProfileModalVisibility } from "../../../redux/modalSlice";
import { useTranslation } from "react-i18next";

const UserModal = () => {
  const { profileModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  return (
    <ModalWrapper
      title={t("modal.profileModal.profile")}
      open={profileModalVisibility}
      okText={t("modal.profileModal.save")}
      okButtonProps={{ disabled: true }}
      onCancel={() => dispatch(switchProfileModalVisibility())}
      cancelText={t("empty_places.information.cancel")}
    >
      <Avatar>
        {storedUserData ? storedUserData?.name[0].toUpperCase() : "A"}
      </Avatar>
      <Text> {t("modal.profileModal.name")}:</Text>
      <DisabledInputs disabled />
      <Text>{t("modal.profileModal.surname")}:</Text>
      <DisabledInputs disabled />
      <Text df>Nihol 0.0.1 version</Text>
    </ModalWrapper>
  );
};

export default UserModal;
