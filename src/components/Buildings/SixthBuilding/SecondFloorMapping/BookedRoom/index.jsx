import { BookedTag, Room } from "../../../../../generic/Style";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

const BookedRoom = ({ clienteValue, roomValue }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <Room
      color={"processing"}
      onClick={() => {
        dispatch(switchUserModalVisibility());
        dispatch(
          setSelectedUser({
            userID: clienteValue.userID,
            buildingMutation: "6-2",
            clienteValue,
            roomValue,
          })
        );
      }}
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
