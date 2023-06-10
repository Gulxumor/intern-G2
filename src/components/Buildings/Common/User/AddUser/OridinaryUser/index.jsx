import { Button, DatePicker, Form, Input, Select } from "antd";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useSelectAPI from "../../../../../../generic/SelectAPI";
import { useAddUser } from "../../../../../../hooks/useQuery/useQueryActions";
import { Wrapper } from "./style";

const OridinaryUser = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const { RangePicker } = DatePicker;
  const { t } = useTranslation();
  const { mutate } = useAddUser();
  const onFinish = (e) => {
    const shouldAddData = {
      ...e,
      birthDate: new Date(e.birthDate.$d).getTime(),
      arrivalDate: new Date(e.range[0].$d).getTime(),
      endDate: new Date(e.range[1].$d).getTime(),
      clienteID: selectedUser.clienteValue.clienteID,
      hasVoucher: false,
      roomID: selectedUser.roomValue._id,
    };
    delete shouldAddData.range;
    mutate({ body: shouldAddData });
  };

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
        buildingNumber: `${t("all_users.building")}-${
          selectedUser.buildingMutation
        }`,
        roomNumber: selectedUser.roomValue.roomNumber,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        rules={[{ required: true, message: t("empty_places.edit.name_error") }]}
        label={t("empty_places.information.full_name")}
        name="fullName"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: t("empty_places.edit.birth_date_error") },
        ]}
        label={t("empty_places.information.birth_date")}
        name="birthDate"
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: t("empty_places.edit.pass_number_error") },
        ]}
        label={t("empty_places.information.passport_number")}
        name="passportID"
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
        label={t("empty_places.information.phone_number")}
        name="phoneNumber"
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
        label={t("empty_places.edit.date_range")}
        name="range"
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: t("empty_places.edit.address_error") },
        ]}
        label={t("empty_places.information.address")}
        name="address"
      >
        <Input />
      </Form.Item>
      <Form.Item
        rules={[
          { required: true, message: t("empty_places.edit.daily_price_error") },
        ]}
        label={t("empty_places.information.daily_price")}
        name="dayCost"
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        label={t("empty_places.information.building_number")}
        name="buildingNumber"
      >
        <Select disabled options={useSelectAPI()} />
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        label={t("empty_places.information.room_number")}
        name="roomNumber"
      >
        <Input disabled />
      </Form.Item>

      <Wrapper.ButtonWrapper>
        <Button>{t("empty_places.information.cancel")}</Button>
        <Button htmlType="submit" type="primary">
          {t("empty_places.information.add")}
        </Button>
      </Wrapper.ButtonWrapper>
    </Form>
  );
};

export default OridinaryUser;
