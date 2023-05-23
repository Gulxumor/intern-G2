import { Alert } from "antd";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import EmptyRoom from "./EmptyRoom";
import BookedRoom from "./BookedRoom";
import Room from "./Room";
import {
  MainRoomWrapper,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
  FloorTitle,
  MenuWrapper,
} from "../../../../generic/Style";

const SecondFloorMapping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/6-2");

  return (
    <MenuWrapper>
      <MainRoomWrapper floor>
        <FloorTitle>2 {t("empty_places.buildingFloor.floor")}</FloorTitle>
        {!data && <Alert message="Сервер не может ответить!" type="error" />}
        <>
          {data?.map((roomValue) => (
            <RoomWrapper key={roomValue?._id}>
              <RoomTitle>
                {roomValue?.roomNumber} {t("all_users.room")}
              </RoomTitle>
              <RoomContainer>
                {roomValue?.cliente?.map((value, index) =>
                  !value.userID && !value.isBooked ? (
                    <EmptyRoom
                      key={value?.clienteID}
                      clienteValue={{
                        ...value,
                        roomNumber: roomValue?.roomNumber,
                        roomOrder: roomValue?.roomOrder,
                        roomID: roomValue._id,
                        bookedCliente: roomValue?.bookedCliente[index],
                        cliente: roomValue?.cliente[index],
                      }}
                    />
                  ) : value.userID ? (
                    <Room
                      key={value?.clienteID}
                      clienteValue={{
                        ...value,
                        roomNumber: roomValue?.roomNumber,
                        roomOrder: roomValue?.roomOrder,
                        roomID: roomValue._id,
                        bookedCliente: roomValue?.bookedCliente[index],
                        cliente: roomValue?.cliente[index],
                      }}
                    />
                  ) : (
                    <BookedRoom
                      key={value?.clienteID}
                      clienteValue={{
                        ...value,
                        roomNumber: roomValue?.roomNumber,
                        roomOrder: roomValue?.roomOrder,
                        roomID: roomValue._id,
                        bookedCliente: roomValue?.bookedCliente[index],
                        cliente: roomValue?.cliente[index],
                      }}
                    />
                  )
                )}
              </RoomContainer>
            </RoomWrapper>
          ))}
        </>
      </MainRoomWrapper>
    </MenuWrapper>
  );
};

export default SecondFloorMapping;
