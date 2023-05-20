import { Alert } from "antd";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import {
  MainRoomWrapper,
  MenuWrapper,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
  Title,
} from "../../../../generic/Style";
import EmptyRoom from "./EmptyRoom";
import BookedRoom from "./BookedRoom";
import Room from "./Room";

const SecondFloorMapping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/5-1");

  return (
    <MenuWrapper floor>
      <Title>1 {t("buildingFloor.floor")}</Title>
      {!data && <Alert message="Сервер не может ответить!" type="error" />}
      <MainRoomWrapper>
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
                    clienteInfo={{
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
                    clienteInfo={{
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
                    clienteInfo={{
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
      </MainRoomWrapper>
    </MenuWrapper>
  );
};

export default SecondFloorMapping;
