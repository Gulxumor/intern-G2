import { useState } from "react";
import { Wrapper } from "../../style";
import { Modal, Select, Spin } from "antd";
import RoomComponent from "../Common/Room";
import { useTranslation } from "react-i18next";
import { useQueryHandler } from "../../../../../../hooks/useQuery";
import { useMoveUser } from "../../../../../../hooks/useQuery/useQueryActions";
import {
  Room,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
} from "../../../../../../generic/Style";

const { confirm } = Modal;

const ThirdMoveBuilding = () => {
  const { mutate } = useMoveUser();
  const [selectedRoom, setSelectedRoom] = useState(0);
  const { data, isLoading } = useQueryHandler({
    queryKey: `accomodation/3`,
    queryLink: `/accomodation/3/room`,
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
          newAccomodationID: `3`,
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
            style={{ marginBottom: "30px" }}
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
                  statusChecker(clienteValue)
                )}
              </RoomContainer>
            </RoomWrapper>
          }
        </>
      )}
    </Wrapper>
  );
};

export default ThirdMoveBuilding;
