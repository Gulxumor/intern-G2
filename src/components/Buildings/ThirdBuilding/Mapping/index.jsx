import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import {
  MainRoomWrapper,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
} from "../../../../generic/Style";
import BookedRoom from "../../SecondBuilding/Mapping/BookedRoom";
import EmptyRoom from "../../SecondBuilding/Mapping/EmptyRoom";
import Third from "../Third";

const Mapping = () => {

  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/3");
  
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
                <Third userID={userID} />
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
