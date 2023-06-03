import { Button, Result } from "antd";
import { useTranslation } from "react-i18next";
import { ButtonWrapper } from "../../../../../../generic/Style";

const EmptyBooking = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Result
        subTitle={t("empty_places.booked_places.error_message")}
        status="404"
      />
      <ButtonWrapper>
        <Button>{t("empty_places.information.cancel")}</Button>
        <Button type="primary">{t("empty_places.information.add")}</Button>
      </ButtonWrapper>
    </div>
  );
};

export default EmptyBooking;
