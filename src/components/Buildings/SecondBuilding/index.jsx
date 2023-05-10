import { Spin } from "antd";
import useAxios from "../../../hooks/useAxios";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import OccupiedRoom from "./OccupiedRoom";
import { useQuery } from "react-query";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import {
  MainRoomWrapper,
  Room,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
  Title,
} from "../../../generic/Style";
const SecondBuilding = () => {
  const axios = useAxios();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(
    "accomodation/2",
    () =>
      axios({ url: "/accomodation/2/room" }).then((data) => {
        return data;
      }),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Wrapper>
      <Title>
        <LeftOutlined
          onClick={() => navigate("/building-types/ordinary-rooms")}
        />
        {`2 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? (
        <Spin />
      ) : (
        <MainRoomWrapper>
          {data?.data?.data?.map(({ _id, roomNumber, cliente }) => (
            <RoomWrapper key={_id}>
              <RoomTitle>{`${roomNumber} ${t("empty_places.room")}`}</RoomTitle>
              <RoomContainer>
                {cliente?.map(({ clienteID, isBooked, userID }) =>
                  isBooked ? (
                    <Room color={"processing"} key={clienteID} />
                  ) : userID ? (
                    <OccupiedRoom key={clienteID} userID={userID} />
                  ) : (
                    <Room color={"green"} key={clienteID} />
                  )
                )}
              </RoomContainer>
            </RoomWrapper>
          ))}
        </MainRoomWrapper>
      )}
    </Wrapper>
  );
};

export default SecondBuilding;
