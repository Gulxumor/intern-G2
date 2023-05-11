import { useTranslation } from "react-i18next";
import Card from "../../../generic/Card";
import { Title } from "../../../generic/Style";
import { Wrapper } from "./style";
import building from "../../../assets/icons/building.svg";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const LuxuryRooms = () => {
  const hasOutlet = useOutlet();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateHandler = (path) => navigate(`${path}`);
  return (
    <>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <>
          <Title>
            <LeftOutlined onClick={() => navigate("/building-types")} />
            {t("empty_places.luxury_rooms")}
          </Title>
          <Wrapper.CardContainer>
            <Card
              onClick={() => navigateHandler("3")}
              title={`3 ${t("empty_places.room")}`}
              image={building}
            />
            <Card
              onClick={() => navigateHandler("5")}
              title={`5 ${t("empty_places.room")}`}
              image={building}
            />
          </Wrapper.CardContainer>
        </>
      )}
    </>
  );
};

export default LuxuryRooms;
