import {
  MainRoomWrapper,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
} from "../../../../generic/Style";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import BookedRoom from "./BookedRoom";
import EmptyRoom from "./EmptyRoom";
import Room from "./Room";

const Mapping = () => {
  
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/2");

  return (
    <MainRoomWrapper>
      {data?.data?.data?.map(({ _id, roomNumber, cliente }) => (
        <RoomWrapper key={_id}>
          <RoomTitle>{`${roomNumber} ${t("empty_places.room")}`}</RoomTitle>
          <RoomContainer>
            {cliente?.map(({ isBooked, userID }) =>
              isBooked ? (
                <BookedRoom />
              ) : userID ? (
                <Room userID={userID} />
              ) : (
                <EmptyRoom />
              )
            )}
          </RoomContainer>
        </RoomWrapper>
      ))}
    </MainRoomWrapper>
  );
};

export default Mapping;
