import { Spin } from "antd";
import useAxios from "../../../hooks/useAxios";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../generic/Style";
const Cottages = () => {
  const axios = useAxios();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading, data } = useQuery(
    "accomodation/5",
    () => axios({ url: "/accomodation/5/room" }).then((data) => data),
    { keepPreviousData: true, refetchOnWindowFocus: false }
  );

  return (
    <Wrapper>
      <Title>
        <LeftOutlined
          onClick={() => navigate("/building-types")}
        />
        {`${t("empty_places.cottages")}`}
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
        //             <Cottage key={clienteID} userID={userID} />
        //           ) : (
        //             <Room color={"green"} key={clienteID} />
        //           )
        //         )}
        //       </RoomContainer>
        //     </RoomWrapper>
        //   ))}
        // </MainRoomWrapper>
        "cottage"
      )}
    </Wrapper>
  );
};

export default Cottages;
