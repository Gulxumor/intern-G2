import { Spin } from "antd";
import { Wrapper } from "./style";
import { Title } from "../../../generic/Style";
import Mapping from "./Mapping";
import { useTranslation } from "react-i18next";
import { useQueryHandler } from "../../../hooks/useQuery";
import AddUser from "../Common/User/AddUser";
import AddBooking from "../Common/UserModal/Booking/AddBooking";
import Arrow from "../../../generic/Arrow";
import Moving from "../Common/Moving";

const SecondBuilding = () => {
  const { t } = useTranslation();

  const { isLoading } = useQueryHandler({
    queryKey: "accomodation/2",
    queryLink: "/accomodation/2/room",
  });

  return (
    <Wrapper>
      <AddUser />
      <AddBooking />
      <Moving />
      <Title>
        <Arrow />
        {`2 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default SecondBuilding;
