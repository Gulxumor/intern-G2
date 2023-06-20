import { Room } from "../../../../../generic/Style";
import { LoadingOutlined, InfoCircleOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQueryHandler } from "../../../../../hooks/useQuery";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { setSelectedUser } from "../../../../../redux/userSlice";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

const OccupiedRoom = ({ clienteValue, roomValue }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data, isLoading } = useQueryHandler({
    queryKey: `user/${clienteValue.userID}`,
    queryLink: `/accomodation/2/user?_id=${clienteValue.userID}`,
  });
  const roomClickDetector = () => {
    dispatch(switchUserModalVisibility());
    dispatch(
      setSelectedUser({
        userID: clienteValue.userID,
        buildingMutation: "2",
        clienteValue,
        roomValue,
      })
    );
  };
  return (
    <Room color={"red"} onClick={() => roomClickDetector()}>
      {clienteValue.isBooked && (
        <Tooltip title={t("empty_places.booked_places.is_booked")}>
          <Room.Info>
            <InfoCircleOutlined />
          </Room.Info>
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
