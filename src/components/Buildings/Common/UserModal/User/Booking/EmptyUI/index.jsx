import { Result } from "antd";
import { useTranslation } from "react-i18next";
const EmptyBooking = () => {
  const { t } = useTranslation();
  return (
    <Result
      subTitle={t("empty_places.booked_places.error_message")}
      status="404"
    />
  );
};

export default EmptyBooking;
