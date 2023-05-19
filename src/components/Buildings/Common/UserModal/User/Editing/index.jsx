import { DatePicker, Form, Input } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";

const Editing = () => {
  const { selectedUserID } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(`user/${selectedUserID}`);
  const { RangePicker } = DatePicker;
  const { t } = useTranslation();
  return (
    <Form
      layout="vertical"
      name="Basic"
      labelCol={{
        span: 15,
      }}
      wrapperCol={{
        span: 24,
      }}
      style={{
        width: "100%",
        marginTop: "20px",
      }}
      initialValues={{
        fullName: userData?.fullName,
        birthDate: dayjs(userData?.birthDate),
        passportNumber: userData?.passportID,
        phoneNumber: userData?.phoneNumber,
        address: userData?.address,
        price: userData?.dayCost,
        cash: userData?.paidByCash,
        card: userData?.paidByPlasticCard,
      }}
    >
      <Form.Item
        rules={[{ required: true, message: t("empty_places.edit.name_error") }]}
        label={t("empty_places.information.full_name")}
        name={"fullName"}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: t("empty_places.edit.birth_date_error") },
        ]}
        label={t("empty_places.information.birth_date")}
        name={"birthDate"}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: t("empty_places.edit.pass_number_error") },
        ]}
        label={t("empty_places.information.passport_number")}
        name={"passportNumber"}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: t("empty_places.edit.phone_number_error"),
          },
        ]}
        name={"phoneNumber"}
        label={t("empty_places.information.phone_number")}
      >
        <Input addonBefore="+998" />
      </Form.Item>
      <Form.Item
        rules={[
          {
            required: true,
            message: t("empty_places.edit.range_error"),
          },
        ]}
        name={"range"}
        label={t("empty_places.edit.date_range")}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: t("empty_places.edit.address_error") },
        ]}
        name={"address"}
        label={t("empty_places.information.address")}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: t("empty_places.edit.daily_price_error") },
        ]}
        name={"price"}
        label={t("empty_places.information.daily_price")}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: t("empty_places.edit.cash_error") }]}
        name={"cash"}
        label={t("empty_places.information.pay_by_cash")}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: t("empty_places.edit.card_error") }]}
        name={"card"}
        label={t("empty_places.information.pay_by_card")}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default Editing;
