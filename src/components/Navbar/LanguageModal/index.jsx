import { useSelector, useDispatch } from "react-redux";
import { Avatar, Div } from "./style";
import { switchLanguageModalVisibility } from "../../../redux/modalSlice";
import { Segmented, Modal } from "antd";

const LanguageModal = () => {
  const { languageModalVisibility } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <Modal
      title="Profile"
      open={languageModalVisibility}
      okText="Change"
      onCancel={() => dispatch(switchLanguageModalVisibility())}
    >
      <Segmented
        block
        options={[
          {
            label: (
              <Div>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png"
                  alt="avatar"
                />
                <div>English</div>
              </Div>
            ),
            value: "english",
          },
          {
            label: (
              <Div>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png"
                  alt="russia-flag"
                />
                <div>Русский</div>
              </Div>
            ),
            value: "russian",
          },
          {
            label: (
              <Div>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png"
                  alt="uzbek-flag"
                />
                <div>O'zbekcha</div>
              </Div>
            ),
            value: "uzb_lotin",
          },
          {
            label: (
              <Div>
                <Avatar
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/255px-Flag_of_Uzbekistan.svg.png"
                  alt="uzbek-flag"
                />
                <div>Ўзбек</div>
              </Div>
            ),
            value: "uzb_krill",
          },
        ]}
      />
    </Modal>
  );
};

export default LanguageModal;
