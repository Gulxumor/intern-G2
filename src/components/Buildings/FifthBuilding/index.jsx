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

const FifthBuilding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading: firstFloorLoading } = useQueryHandler({
    queryKey: `accomodation/5-1`,
    queryLink: `/accomodation/5-1/room`,
  });
  const { isLoading: secondFloorLoading } = useQueryHandler({
    queryKey: `accomodation/5-1`,
    queryLink: `/accomodation/5-2/room`,
  });
  return (
    <Wrapper>
      <UserModal />
      <Title>
        <LeftOutlined
          onClick={() => navigate("/building-types/luxury-rooms")}
        />
        {`5 ${t("empty_places.building")}`}
      </Title>
      {firstFloorLoading || secondFloorLoading ? (
        <Spin />
      ) : (
        <>
          <FirstFloorMapping /> <SecondFloorMapping />
        </>
      )}
    </Wrapper>
  );
};

export default FifthBuilding;
