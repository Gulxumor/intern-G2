import { Room } from "../../../../../generic/Style";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";
import { switchAddUserModalVisibility } from "../../../../../redux/modalSlice";

const { confirm } = Modal;

const EmptyRoom = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onWarning = () => {
    return confirm({
      title: t("empty_places.information.empty_place_error"),
      content: t("empty_places.information.this_place_is_empty"),
      closable: true,
      cancelText: t("empty_places.information.book"),
      okText: t("empty_places.information.add"),
      onOk: () => {
        dispatch(switchAddUserModalVisibility());
      },
    });
  };
  return <Room color={"green"} onClick={onWarning}></Room>;
};

export default EmptyRoom;
