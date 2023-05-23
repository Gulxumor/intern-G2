import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import {
  MainRoomWrapper,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
} from "../../../../generic/Style";
import UserModal from "../../Common/UserModal";
import BookedRoom from "./BookedRoom";
import EmptyRoom from "./EmptyRoom";
import Room from "./Room";

const statusChecker = (clienteValue, roomValue) => {
  if (clienteValue.isBooked)
    return (
      <BookedRoom
        key={clienteValue.clienteID}
        clienteValue={clienteValue}
        roomValue={roomValue}
      />
    );
  else if (clienteValue.userID)
    return (
      <Room
        key={clienteValue.clienteID}
        roomValue={roomValue}
        clienteValue={clienteValue}
      />
    );
  else return <EmptyRoom key={clienteValue.clienteID} />;
};
const Mapping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/4");

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
