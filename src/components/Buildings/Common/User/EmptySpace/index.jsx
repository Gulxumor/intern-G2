import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";

const EmptySpace = () => {
  const { t } = useTranslation();
  return (
    <Result
      status={"404"}
      subTitle={t("empty_places.information.room_is_empty")}
      extra={<Button type="primary">Add</Button>}
    />
  );
};

export default EmptySpace;
