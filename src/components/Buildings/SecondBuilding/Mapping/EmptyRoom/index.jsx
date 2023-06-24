import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Room } from "../../../../../generic/Style";
import { setSelectedUser } from "../../../../../redux/userSlice";
import {
  switchAddUserModalVisibility,
  switchUserAddBookingModalVisibility,
} from "../../../../../redux/modalSlice";

const { confirm } = Modal;

const EmptyRoom = ({ roomValue, clienteValue }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onWarning = () => {
    return confirm({
      closable: true,
      title: t("empty_places.information.empty_place_error"),
      content: t("empty_places.information.this_place_is_empty"),
      cancelText: t("empty_places.information.book"),
      okText: t("empty_places.information.add"),
      onCancel: () => {
        dispatch(
          switchUserAddBookingModalVisibility({
            open: true,
            loading: false,
          })
        );
      },
      onOk: () => {
        dispatch(
          setSelectedUser({ buildingMutation: "2", roomValue, clienteValue })
        );
        dispatch(
          switchAddUserModalVisibility({
            open: true,
            loading: false,
          })
        );
      },
    });
  };

  return <Room color={"green"} onClick={onWarning} />;
};

export default EmptyRoom;
