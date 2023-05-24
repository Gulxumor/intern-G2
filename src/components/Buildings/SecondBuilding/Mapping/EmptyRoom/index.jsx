import { Room } from "../../../../../generic/Style";
import { Button, Modal } from "antd";
import { ConfirmModalButtonWrapper } from "../../../../../generic/Style";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { useTranslation } from "react-i18next";
import {
  switchAddBookingModalVisibility,
  switchAddUserModalVisibility,
} from "../../../../../redux/modalSlice";

const { confirm } = Modal;

const EmptyRoom = ({ clienteValue, roomValue }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(
      setSelectedUser({
        // userID: clienteValue.userID,
        buildingMutation: "2",
        clienteValue,
        roomValue,
      })
    );
    return confirm({
      title: t("empty_places.information.empty_place_error"),
      content: t("empty_places.information.this_place_is_empty"),
      closable: true,
      footer: (
        <ConfirmModalButtonWrapper>
          <Button
            onClick={() => {
              Modal.destroyAll();
              dispatch(
                switchAddBookingModalVisibility({ loading: false, open: true })
              );
            }}
          >
            {t("empty_places.information.book")}
          </Button>
          <Button
            onClick={() => {
              Modal.destroyAll();
              dispatch(
                switchAddUserModalVisibility({ loading: false, open: true })
              );
            }}
            type="primary"
          >
            {t("empty_places.information.add")}
          </Button>
        </ConfirmModalButtonWrapper>
      ),
    });
  };
  return <Room color={"green"} onClick={onClickHandler}></Room>;
};

export default EmptyRoom;
