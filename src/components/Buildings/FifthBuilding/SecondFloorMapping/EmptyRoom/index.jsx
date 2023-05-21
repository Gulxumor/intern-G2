import { Room } from "../../../../../generic/Style";
import { Button, Modal } from "antd";
import { ConfirmModalButtonWrapper } from "../Room/style";
import { useDispatch } from "react-redux";
import {
  switchAddBookingModalVisibility,
  switchAddUserModalVisibility,
} from "../../../../../redux/modalSlice";
import { switchSetSelectedUserID } from "../../../../../redux/userSlice";
import { useTranslation } from "react-i18next";

const { confirm } = Modal;

const EmptyRoom = ({ clienteInfo }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(
      switchSetSelectedUserID({ ...clienteInfo, mutationBuildingNumber: "5-2" })
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
