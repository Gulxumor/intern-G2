import { Spin } from "antd";
import { Wrapper } from "./style";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../generic/Style";
import Mapping from "./Mapping";
import { useTranslation } from "react-i18next";
import { useQueryHandler } from "../../../hooks/useQuery";
import UserModal from "../Common/UserModal";
import AddUser from "../Common/User/AddUser";

const SecondBuilding = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { isLoading } = useQueryHandler({
    queryKey: "accomodation/2",
    queryLink: "/accomodation/2/room",
  });

  return (
    <Wrapper>
      <UserModal />
      <AddUser/>
      <Title>
        <LeftOutlined onClick={() => navigate(-1)} />
        {`2 ${t("empty_places.building")}`}
      </Title>
      {isLoading ? <Spin /> : <Mapping />}
    </Wrapper>
  );
};

export default SecondBuilding;
