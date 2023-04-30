import React from "react";
import Card from "../../generic/Card";
import all_users from "../../assets/icons/all_users.svg";
import empty_place from "../../assets/icons/empty_place.svg";
import end_time from "../../assets/icons/end_time.svg";
import report from "../../assets/icons/report.svg";
import { Title } from "../../generic/Style";
import { Wrapper } from "./style";

const Home = () => {
  return (
    <Wrapper>
      <Title>Sections:</Title>
      <Wrapper.CardContainer>
        <Card title="All Users" image={all_users} />
        <Card title="Half Time" image={end_time} />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card title="Time up" image={end_time} />
        <Card title="Empty places" image={empty_place} />
      </Wrapper.CardContainer>
      <Title>Reports:</Title>
      <Wrapper.CardContainer>
        <Card title="Reports" image={report} />
      </Wrapper.CardContainer>
    </Wrapper>
  );
};

export default Home;
