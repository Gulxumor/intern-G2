import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { Title } from "../../../generic/Style";
import Mapping from "./Mapping";
import { useQueryHandler } from "../../../hooks/useQuery";
import AddUser from "../Common/User/AddUser";
import AddBooking from "../Common/UserModal/Booking/AddBooking";
import Arrow from "../../../generic/Arrow";
import Moving from "../Common/Moving";

const FourthBuilding = () => {
  const { t } = useTranslation();

  const { isLoading } = useQueryHandler({
    queryLink: "/accomodation/4/room",
    queryKey: "accomodation/4",
  });

  return (
    <Wrapper>
      <AddUser />
      <AddBooking />
      <Moving />
      <Title>
        <Arrow />
        {`4 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default FourthBuilding;
