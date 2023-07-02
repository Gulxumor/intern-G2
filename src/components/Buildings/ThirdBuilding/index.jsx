import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { Title } from "../../../generic/Style";
import { useQueryHandler } from "../../../hooks/useQuery";
import Mapping from "./Mapping";
import AddUser from "../Common/User/AddUser";
import AddBooking from "../Common/UserModal/Booking/AddBooking";
import Arrow from "../../../generic/Arrow";
import Moving from "../Common/Moving";

const ThirdBuilding = () => {
  const { t } = useTranslation();

  const { isLoading } = useQueryHandler({
    queryLink: "/accomodation/3/room",
    queryKey: "accomodation/3",
  });

  return (
    <Wrapper>
      <AddUser />
      <AddBooking />
      <Moving />
      <Title>
        <Arrow />
        {`3 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default ThirdBuilding;
