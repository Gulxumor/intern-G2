import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import {
  switchAddUserModalVisibility,
  switchUserModalVisibility,
} from "../../../../../redux/modalSlice";

const EmptySpace = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Result
      status={"404"}
      subTitle={t("empty_places.information.room_is_empty")}
      extra={
        <Button
          type="primary"
          onClick={() => {
            dispatch(
              switchAddUserModalVisibility({
                open: true,
                loading: false,
              })
            );
            dispatch(switchUserModalVisibility());
          }}
        >
          {t("empty_places.information.add")}
        </Button>
      }
    />
  );
};

export default EmptySpace;
    