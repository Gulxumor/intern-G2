import { BookedTag, Room } from "../../../../../generic/Style";
import dayjs from "dayjs";
import {useQueryHandler} from "../../../../../hooks/useQuery";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

const RoomComponent = ({ clienteValue, roomValue }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { data, isLoading } = useQueryHandler({
    queryLink: `/accomodation/6-3/user?_id=${clienteValue?.userID}`,
    queryKey: `user/${clienteValue?.userID}`,
  });

  return (
    <Room
      color={clienteValue.userID ? "red" : "processing"}
      onClick={() => {
        if (!isLoading) {
          dispatch(switchUserModalVisibility());
          dispatch(
            setSelectedUser({
              userID: clienteValue.userID,
              clienteValue,
              roomValue,
              buildingMutation: "6-3",
            })
          );
        }
      }}
    >
      {clienteValue?.isBooked && (
        <Tooltip placement="top" title={t("booking.title")}>
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
      {isLoading && <LoadingOutlined />}
      {!isLoading &&
        clienteValue.userID &&
        dayjs(Number(data?.endDate)).diff(new Date().toDateString(), "d")}
    </Room>
  );
};

export default RoomComponent;
