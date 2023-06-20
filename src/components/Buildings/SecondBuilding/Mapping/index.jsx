import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import BookedRoom from "./BookedRoom";
import EmptyRoom from "./EmptyRoom";
import Room from "./Room";
import {
  MainRoomWrapper,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
} from "../../../../generic/Style";
import UserModal from "../../Common/UserModal";

const Mapping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/2");

  const statusChecker = (clienteValue, roomValue) => {
    if (clienteValue.userID || (clienteValue.isBooked && clienteValue.userID))
      return (
        <Room
          key={clienteValue.clienteID}
          roomValue={roomValue}
          clienteValue={clienteValue}
        />
      );
    else if (clienteValue.isBooked)
      return (
        <BookedRoom
          key={clienteValue.clienteID}
          clienteValue={clienteValue}
          roomValue={roomValue}
        />
      );
    else
      return (
        <EmptyRoom
          key={clienteValue.clienteID}
          roomValue={roomValue}
          clienteValue={clienteValue}
        />
      );
  };

  return (
    <MainRoomWrapper>
      <UserModal />
      {data?.map((roomValue) => (
        <RoomWrapper key={roomValue._id}>
          <RoomTitle>{`${roomValue.roomNumber} ${t(
            "empty_places.room"
          )}`}</RoomTitle>
          <RoomContainer>
            {roomValue.cliente?.map((clienteValue) =>
              statusChecker(clienteValue, roomValue)
            )}
          </RoomContainer>
        </RoomWrapper>
      ))}
    </MainRoomWrapper>
  );
};

export default Mapping;
