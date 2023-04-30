import { message, notification } from "antd";

const notFoundError = {
  message: "User not found",
  description: "Phone number or password is wrong",
};
const notFillingError = { message: "Please fill all the fields" };

export const useNotificationAPI = () => {
  return (status) => {
    switch (status) {
      case 409:
        return notification.error(notFoundError);
      case 400:
        return notification.error(notFillingError);
      default:
        return notification.error({ message: "Missing status" });
    }
  };
};
