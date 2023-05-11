import { Spin } from "antd";
import useAxios from "../../../hooks/useAxios";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Sixth from "./Sixth";
import {
  MainRoomWrapper,
  Room,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
  Title,
} from "../../../generic/Style";
const SixthBuilding = () => {
  const axios = useAxios();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(
    "accomodation/6",
    () => axios({ url: "/accomodation/6/room" }).then((data) => data),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  return (
    <Wrapper>
      <Title>
        <LeftOutlined
          onClick={() => navigate("/building-types/ordinary-rooms")}
        />
        {`6 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? (
        <Spin />
      ) : (
        // <MainRoomWrapper>
        //   {data.data.data.map(({ _id, roomNumber, cliente }) => (
        //     <RoomWrapper key={_id}>
        //       <RoomTitle>{`${roomNumber} ${t("empty_places.room")}`}</RoomTitle>
        //       <RoomContainer>
        //         {cliente?.map(({ clienteID, isBooked, userID }) =>
        //           isBooked ? (
        //             <Room color={"processing"} key={clienteID} />
        //           ) : userID ? (
        //             <Sixth key={clienteID} userID={userID} />
        //           ) : (
        //             <Room color={"green"} key={clienteID} />
        //           )
        //         )}
        //       </RoomContainer>
        //     </RoomWrapper>
        //   ))}
        // </MainRoomWrapper>
        "6-xona"
      )}
    </Wrapper>
  );
};

export default SixthBuilding;