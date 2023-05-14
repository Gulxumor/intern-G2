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
import Fourth from "../Fourth";

const Mapping = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("accomodation/4");

  return (
    <MainRoomWrapper>
      {data?.data?.data?.map(({ _id, roomNumber, cliente }) => (
        <RoomWrapper key={_id}>
          <RoomTitle>{`${roomNumber} ${t("empty_places.room")}`}</RoomTitle>
          <RoomContainer>
            {cliente?.map(({ isBooked, userID }) =>
              isBooked ? <BookedRoom /> : userID ? <Fourth /> : <EmptyRoom />
            )}
          </RoomContainer>
        </RoomWrapper>
      ))}
    </MainRoomWrapper>
  );
};

export default Mapping;