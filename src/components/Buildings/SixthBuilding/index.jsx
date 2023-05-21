import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../generic/Style";
import { useQueryHandler } from "../../../hooks/useQuery";
import UserModal from "../Common/UserModal";
import FirstFloorMapping from "./FirstFloorMapping";
import SecondFloorMapping from "./SecondFloorMapping";
import ThirdFloorMapping from "./ThirdFloorMapping";

const SixthBuilding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading: firstFloorLoading } = useQueryHandler({
    queryKey: "accomodation/6-1",
    queryLink: "/accomodation/6-1/room",
  });
  const { isLoading: secondFloorLoading } = useQueryHandler({
    queryKey: "accomodation/6-2",
    queryLink: "/accomodation/6-2/room",
  });
  const { isLoading: thirdFloorLoading } = useQueryHandler({
    queryKey: "accomodation/6-3",
    queryLink: "/accomodation/6-3/room",
  });

  <Wrapper>
    <UserModal />
    <Title>
      <LeftOutlined onClick={() => navigate(-1)} />
      {`6 ${t("empty_places.building")}`}
    </Title>
    <Wrapper.MapWrapper>
      {firstFloorLoading || secondFloorLoading || thirdFloorLoading ? (
        <Spin />
      ) : (
        <>
          <FirstFloorMapping /> <SecondFloorMapping /> <ThirdFloorMapping />
        </>
      )}
    </Wrapper.MapWrapper>
  </Wrapper>;
};

export default SixthBuilding;
