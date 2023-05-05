import { useSelector, useDispatch } from "react-redux";
import { ModalWrapper, DisabledInputs, Avatar, Text } from "./style";
import { switchLanguageModalVisibility } from "../../../redux/modalSlice";

const LanguageModal = () => {
  const { languageModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  return (
    <ModalWrapper
      title="Profile"
      open={languageModalVisibility}
      okText="Save"
      okButtonProps={{ disabled: true }}
      onCancel={() => dispatch(switchLanguageModalVisibility())}
    >
      <Avatar> {storedUserData.name[0].toUpperCase()}</Avatar>
      <Text> Name:</Text>
      <DisabledInputs disabled />
      <Text>Surname:</Text>
      <DisabledInputs disabled />
      <Text df>Nihol 0.0.1 version</Text>
    </ModalWrapper>
  );
};

export default LanguageModal;
