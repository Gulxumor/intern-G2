import { Button, DatePicker, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import EmptySpace from "../EmptySpace";
import { Wrapper } from "./style";
import dayjs from "dayjs";
import { useUpdatedUser } from "../../../../../hooks/useQuery/useQueryActions";

const Editing = () => {
  const { mutate } = useUpdatedUser();
  const { selectedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(`user/${selectedUser.userID}`);
  const { RangePicker } = DatePicker;
  const { t } = useTranslation();

  const onsubmit = (e) => {
    const updatedUserData = {
      ...userData,
      ...e,
      birthDate: new Date(e.birthDate.$d).getTime(),
      arrivalDate: new Date(e.range[0].$d).getTime(),
      endDate: new Date(e.range[1].$d).getTime(),
    };
    delete updatedUserData.range;
    mutate({ body: updatedUserData });
  };

  return !selectedUser.userID ? (
    <EmptySpace />
  ) : (
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
      onFinish={onsubmit}
      initialValues={{
        fullName: userData?.fullName,
        birthDate: dayjs(userData?.birthDate),
        passportID: userData?.passportID,
        phoneNumber: userData?.phoneNumber,
        address: userData?.address,
        dayCost: userData?.dayCost,
        paidByCash: userData?.paidByCash,
        paidByPlasticCard: userData?.paidByPlasticCard,
        range: [dayjs(+userData?.arrivalDate), dayjs(+userData?.endDate)],
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
        name={"passportID"}
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
        name={"dayCost"}
        label={t("empty_places.information.daily_price")}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: t("empty_places.edit.cash_error") }]}
        name={"paidByCash"}
        label={t("empty_places.information.pay_by_cash")}
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: t("empty_places.edit.card_error") }]}
        name={"paidByPlasticCard"}
        label={t("empty_places.information.pay_by_card")}
      >
        <Input />
      </Form.Item>
      <Wrapper.ButtonWrapper>
        <Button>{t("empty_places.information.cancel")}</Button>
        <Button htmlType="submit" type="primary">
          {t("empty_places.information.update")}
        </Button>
      </Wrapper.ButtonWrapper>
    </Form>
  );
};

export default Editing;
