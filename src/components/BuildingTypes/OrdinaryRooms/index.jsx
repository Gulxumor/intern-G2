import { useTranslation } from "react-i18next";
import Card from "../../../generic/Card";
import { Title } from "../../../generic/Style";
import { Wrapper } from "./style";
import building from "../../../assets/icons/building.svg";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const OrdinaryRooms = () => {
  const hasOutlet = useOutlet();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateHandler = (path) => navigate(`${path}`);
  return (
    <>
      {hasOutlet ? (
        <Outlet />
      ) : (
        <div>
          <Title>
            <LeftOutlined onClick={() => navigate("/building-types")} />
            {t("empty_places.oridinary_rooms")}
          </Title>
          <Wrapper.CardContainer>
            <Card
              onClick={() => navigateHandler("2")}
              title={`2 ${t("empty_places.room")}`}
              image={building}
            />
            <Card
              onClick={() => navigateHandler("4")}
              title={`4 ${t("empty_places.room")}`}
              image={building}
            />
          </Wrapper.CardContainer>
          <Wrapper.CardContainer>
            <Card
              onClick={() => navigateHandler("6")}
              title={`6 ${t("empty_places.room")}`}
              image={building}
            />
          </Wrapper.CardContainer>
        </div>
      )}
    </>
  );
};

export default OrdinaryRooms;
