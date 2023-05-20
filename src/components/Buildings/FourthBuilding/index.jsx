import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { LeftOutlined } from "@ant-design/icons";
import { Title } from "../../../generic/Style";
import { useNavigate } from "react-router-dom";
import Mapping from "./Mapping";
import { useQueryHandler } from "../../../hooks/useQuery";
import UserModal from "../Common/UserModal";
const SecondBuilding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading } = useQueryHandler({
    queryLink: "/accomodation/4/room",
    queryKey: "accomodation/4",
  });

  return (
    <Wrapper>
      <UserModal />
      <Title>
        <LeftOutlined
          onClick={() => navigate("/building-types/ordinary-rooms")}
        />
        {`4 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default SecondBuilding;
