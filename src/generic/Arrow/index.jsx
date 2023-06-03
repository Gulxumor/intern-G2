import { useNavigate } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";

const Arrow = () => {
  const navigate = useNavigate();
  return <LeftOutlined onClick={() => navigate(-1)} />;
};

export default Arrow;
