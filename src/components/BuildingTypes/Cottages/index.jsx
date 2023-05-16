import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../generic/Style";
import { useQueryHandler } from "../../../hooks/useQuery";

const Cottages = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading } = useQueryHandler({
    queryKey: "accomodation/5",
    queryLink: "/accomodation/5/room",
  });

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
