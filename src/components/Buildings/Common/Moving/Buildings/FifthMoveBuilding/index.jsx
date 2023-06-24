import { useState } from "react";
import { Wrapper } from "../../style";
import { Modal, Select, Spin } from "antd";
import { useQueryHandler } from "../../../../../../hooks/useQuery";
import { useTranslation } from "react-i18next";
import { useMoveUser } from "../../../../../../hooks/useQuery/useQueryActions";
import RoomComponent from "../Common/Room";
import {
  Room,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
} from "../../../../../../generic/Style";

const { confirm } = Modal;

const FifthMoveBuilding = () => {
  const { mutate } = useMoveUser();
  const [selectedRoom, setSelectedRoom] = useState(0);
  const { data, isLoading } = useQueryHandler({
    queryKey: `accomodation/5-1`,
    queryLink: `/accomodation/5-2/room`,
  });

  const { t } = useTranslation();

  const moveHandler = (clienteValue) => {
    return confirm({
      title: t("modal.log_out_modal.are_u_sure"),
      content: t("modal.do_u_want_to_move"),
      okText: t("modal.sure"),
      onOk: () =>
        mutate({
          newRoomNumber: roomValue?.roomNumber,
          newClienteID: clienteValue?.clienteID,
          newAccomodationID: `5`,
          room_id: roomValue._id,
        }),
    });
  };

  const statusChecker = (value) => {
    if (value.userID || (value.isBooked && value.userID))
      return <RoomComponent key={value.clienteID} value={value} />;
    else if (value.isBooked)
      return <Room key={value.clienteID} color="processing" />;
    else
      return (
        <Room
          onClick={() => moveHandler(value)}
          key={value.clienteID}
          color="green"
        />
      );
  };

  const roomValue = data[selectedRoom];
  return (
    <Wrapper>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          Select room:
          <Select
            style={{ marginBottom: "20px" }}
            onChange={(e) => setSelectedRoom(+e)}
            defaultValue={"0"}
            options={data.map(({ roomNumber, roomOrder }) => ({
              label: `${roomNumber} room`,
              value: `${roomOrder}`,
            }))}
          />
          Select position:
          {
            <RoomWrapper>
              <RoomTitle>{roomValue.roomNumber} room</RoomTitle>
              <RoomContainer>
                {roomValue.cliente?.map((clienteValue) =>
                  statusChecker(clienteValue, roomValue)
                )}
              </RoomContainer>
            </RoomWrapper>
          }
        </>
      )}
    </Wrapper>
  );
};

export default FifthMoveBuilding;
