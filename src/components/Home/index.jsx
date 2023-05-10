import React from "react";
import Card from "../../generic/Card";
import all_users from "../../assets/icons/all_users.svg";
import empty_place from "../../assets/icons/empty_place.svg";
import half_time from "../../assets/icons/half_time.svg";
import end_time from "../../assets/icons/end_time.svg";
import report from "../../assets/icons/report.svg";
import { Title } from "../../generic/Style";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title>{t("home_page.section_title")}</Title>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigate("/all-users")}
          title={t("home_page.all_users")}
          image={all_users}
        />
        <Card
          onClick={() => navigate("/half-time")}
          title={t("home_page.half_time")}
          image={half_time}
        />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigate("/time-up")}
          title={t("home_page.time_up")}
          image={end_time}
        />
        <Card
          onClick={() => navigate("/building-types")}
          title={t("home_page.empty_places")}
          image={empty_place}
        />
      </Wrapper.CardContainer>
      <Title>{t("home_page.report")}:</Title>
      <Wrapper.CardContainer>
        <Card
          onClick={() => navigate("/report")}
          title={t("home_page.report")}
          image={report}
        />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Home;
