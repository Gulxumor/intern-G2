import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Fifth from "./Fifth";
import {
  MainRoomWrapper,
  // Room,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
  Title,
} from "../../../generic/Style";
import { useQueryHandler } from "../../../hooks/useQuery";
import BookedRoom from "./Mapping/BookedRoom";
import EmptyRoom from "./Mapping/EmptyRoom";

const statusChecker = (isBooked, userID, clienteID) => {
  if (isBooked) return <BookedRoom key={clienteID} />;
  else if (userID) return <Fifth key={clienteID} userID={userID} />;
  return <EmptyRoom key={clienteID} />;
};

const FifthBuilding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading, data } = useQueryHandler({
    queryKey: `accomodation/5-1`,
    queryLink: `/accomodation/5-1/room`,
  });
  return (
    <Wrapper>
      <Title>
        <LeftOutlined
          onClick={() => navigate("/building-types/luxury-rooms")}
        />
        {`5 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <MainRoomWrapper>
            {data?.map(({ _id, roomNumber, cliente }) => (
              <RoomWrapper key={_id}>
                <RoomTitle>{`${roomNumber} ${t(
                  "empty_places.room"
                )}`}</RoomTitle>
                <RoomContainer>
                  {cliente?.map(({ isBooked, userID, clienteID }) =>
                    statusChecker(isBooked, userID, clienteID)
                  )}
                </RoomContainer>
              </RoomWrapper>
            ))}
          </MainRoomWrapper>
        </>
        // "5-xona"
      )}
    </Wrapper>
  );
};

export default FifthBuilding;
