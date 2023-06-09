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

const statusChecker = (isBooked, userID, clienteID) => {
  if (isBooked) return <BookedRoom key={clienteID} />;
  else if (userID) return <Room key={clienteID} userID={userID} />;
  return <EmptyRoom key={clienteID} />;
};

const Mapping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/3");

  return (
    <MainRoomWrapper>
      {data?.map(({ _id, roomNumber, cliente }) => (
        <RoomWrapper key={_id}>
          <RoomTitle>{`${roomNumber} ${t("empty_places.room")}`}</RoomTitle>
          <RoomContainer>
            {cliente?.map(({ isBooked, userID, clienteID }) =>
              statusChecker(isBooked, userID, clienteID)
            )}
          </RoomContainer>
        </RoomWrapper>
      ))}
    </MainRoomWrapper>
  );
};

export default Mapping;
