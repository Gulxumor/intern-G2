import { notification } from "antd";
import { useTranslation } from "react-i18next";

export const useNotificationAPI = () => {
  const { t } = useTranslation();
  const notFoundError = {
    message: t("empty_places.notification.not_found"),
    description: t("empty_places.notification.number_wrong"),
  };
  const notFillingError = {
    message: t("empty_places.notification.not_filling_error"),
  };
  return (status) => {
    switch (status) {
      case 409:
        return notification.error(notFoundError);
      case 400:
        return notification.error(notFillingError);
      default:
        return notification.error({
          message: t("empty_places.notification.missing_status"),
        });
    }
  };
};
