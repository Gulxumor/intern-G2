import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { BookedTag, Room } from "../../../../../generic/Style";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const BookedRoom = (roomValue, clienteValue) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Room
      onClick={() => {
        dispatch(switchUserModalVisibility());
        dispatch(
          setSelectedUser({
            userID: clienteValue.userID,
            buildingMutation: "4",
            clienteValue,
            roomValue,
          })
        );
      }}
      color={"processing"}
    >
      {clienteValue?.isBooked && (
        <Tooltip placement="top" title={t("booking.title")}>
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
    </Room>
  );
};

export default BookedRoom;
