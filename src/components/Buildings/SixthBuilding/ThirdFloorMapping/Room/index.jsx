import { BookedTag, Room } from "../../../../../generic/Style";
import dayjs from "dayjs";
import {useQueryHandler} from "../../../../../hooks/useQuery";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { switchUserModalVisibility } from "../../../../../redux/modalSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { switchSetSelectedUserID } from "../../../../../redux/userSlice";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

const RoomComponent = ({ clienteInfo }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const useQuery = useQueryHandler();

  const { data, isLoading } = useQuery({
    queryLink: `/accomodation/6-3/user?_id=${clienteInfo?.userID}`,
    queryKey: `user/${clienteInfo?.userID}`,
  });

  return (
    <Room
      color={clienteInfo.userID ? "red" : "processing"}
      onClick={() => {
        if (!isLoading) {
          dispatch(switchUserModalVisibility());
          dispatch(
            switchSetSelectedUserID({
              ...clienteInfo,
              mutationBuildingNumber: "6-3",
            })
          );
        }
      }}
    >
      {clienteInfo?.isBooked && (
        <Tooltip placement="top" title={t("booking.title")}>
          <BookedTag color="warning">
            <ExclamationCircleOutlined />
          </BookedTag>
        </Tooltip>
      )}
      {isLoading && <LoadingOutlined />}
      {!isLoading &&
        clienteInfo.userID &&
        dayjs(Number(data?.endDate)).diff(new Date().toDateString(), "d")}
    </Room>
  );
};

export default RoomComponent;
