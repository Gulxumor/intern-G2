import dayjs from "dayjs";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { BookedTag, Room } from "../../../../../generic/Style";
import { useQueryHandler } from "../../../../../hooks/useQuery";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { LoadingOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";

const OccupiedRoom = ({ clienteValue, roomValue }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data, isLoading } = useQueryHandler({
    queryKey: `user/${clienteValue.userID}`,
    queryLink: `/accomodation/6-3/user?_id=${clienteValue.userID}`,
  });
  const roomClickDetector = () => {
    dispatch(switchUserModalVisibility());
    dispatch(
      setSelectedUser({
        userID: clienteValue.userID,
        buildingMutation: "6-3",
        clienteValue,
        roomValue,
      })
    );
  };
  return (
    <Room color={"red"} onClick={() => roomClickDetector()}>
      {clienteValue?.isBooked && (
        <Tooltip
          placement="top"
          title={t("empty_places.booked_places.is_booked")}
        >
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}

      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(new Date(+data?.endDate)).diff(new Date(), "d")
      )}
    </Room>
  );
};

export default OccupiedRoom;
