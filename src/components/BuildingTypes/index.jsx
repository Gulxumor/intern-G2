import { useTranslation } from "react-i18next";
import { Title } from "../../generic/Style";
import { Wrapper } from "./style";
import Card from "../../generic/Card";
import mansion from "../../assets/icons/mansion.svg";
import luxury_room from "../../assets/icons/luxury_room.svg";
import ordinary_room from "../../assets/icons/ordinary_room.svg";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const Types = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const navigateHandler = (path) => navigate(`/building-types/${path}`);

  return (
    <>
      <Title>
        <LeftOutlined onClick={() => navigate("/")} />
        {t("empty_places.building_types")}
      </Title>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler("ordinary-rooms")}
          title={t("empty_places.oridinary_rooms")}
          image={ordinary_room}
        />
        <Card
          onClick={() => navigateHandler("luxury-rooms")}
          title={t("empty_places.luxury_rooms")}
          image={luxury_room}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigateHandler("cottages")}
          title={t("empty_places.cottages")}
          image={mansion}
        />
      </Wrapper.CardContainer>
    </>
  );
};

const BuildingTypes = () => {
  const hasOutlet = useOutlet();
  return <Wrapper>{hasOutlet ? <Outlet /> : <Types />}</Wrapper>;
};

export default BuildingTypes;
