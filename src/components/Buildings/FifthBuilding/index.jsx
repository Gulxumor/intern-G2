import { Spin } from "antd";
import { Wrapper } from "./style";
import { useTranslation } from "react-i18next";
import { Title } from "../../../generic/Style";
import { useQueryHandler } from "../../../hooks/useQuery";
import UserModal from "../Common/UserModal";
import FirstFloorMapping from "./FirstFloorMapping";
import SecondFloorMapping from "./SecondFloorMapping";
import AddUser from "../Common/User/AddUser";
import AddBooking from "../Common/UserModal/Booking/AddBooking";
import Arrow from "../../../generic/Arrow";
import Moving from "../Common/Moving";

const FifthBuilding = () => {
  const { t } = useTranslation();

  const { isLoading: firstFloorLoading } = useQueryHandler({
    queryKey: `accomodation/5-1`,
    queryLink: `/accomodation/5-1/room`,
  });
  const { isLoading: secondFloorLoading } = useQueryHandler({
    queryKey: `accomodation/5-2`,
    queryLink: `/accomodation/5-2/room`,
  });
  return (
    <Wrapper>
      <AddUser />
      <AddBooking />
      <UserModal />
      <Moving />
      <Title>
        <Arrow />
        {`5 ${t("empty_places.building")}`}
      </Title>
      <Wrapper.MapWrapper>
        {firstFloorLoading || secondFloorLoading ? (
          <Spin />
        ) : (
          <>
            <FirstFloorMapping /> <SecondFloorMapping />
          </>
        )}
      </Wrapper.MapWrapper>
    </Wrapper>
  );
};

export default FifthBuilding;
