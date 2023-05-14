import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Third from "./Third";
import { Title } from "../../../generic/Style";
import { useQueryHandler } from "../../../hooks/useQuery";
import Mapping from "./Mapping";
const ThirdBuilding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading } = useQueryHandler({
    queryLink: "/accomodation/3/room",
    queryKey: "accomodation/3",
  });

  return (
    <Wrapper>
      <Title>
        <LeftOutlined onClick={() => navigate(-1)} />
        {`3 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default ThirdBuilding;
