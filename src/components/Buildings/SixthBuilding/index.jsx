import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import FirstFloorMapping from "./FirstFloorMapping";
import {
  MainRoomWrapper,
  Room,
  RoomContainer,
  RoomTitle,
  RoomWrapper,
  Title,
} from "../../../generic/Style";
import { useQueryHandler } from "../../../hooks/useQuery";

const SixthBuilding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const useQuery = useQueryHandler();

  const { isLoading: firstFloorLoading } = useQuery({
    queryKey: "accomodation/6-1",
    queryLink: "/accomodation/6-1/room",
  });

  const { isLoading: secondFloorLoading } = useQuery({
    queryKey: "accomodation/6-2",
    queryLink: "/accomodation/6-2/room",
  });
  const { isLoading: thirdFloorLoading } = useQuery({
    queryKey: "accomodation/6-3",
    queryLink: "/accomodation/6-3/room",
  });

  return (
    <Wrapper>
      <Title>
        <LeftOutlined
          onClick={() => navigate("/building-types/ordinary-rooms")}
        />
        {`6 ${t("empty_places.building")}`}
      </Title>
      {firstFloorLoading || secondFloorLoading || thirdFloorLoading ? (
        <Spin />
      ) : (
        <>
          <FirstFloorMapping /> <SecondFloorMapping /> <ThirdFloorMapping />
        </>
      )}
    </Wrapper>
  );
};

export default SixthBuilding;
