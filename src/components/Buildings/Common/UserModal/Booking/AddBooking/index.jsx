import { Button, DatePicker, Form, Input, Modal } from "antd";
import { useTranslation } from "react-i18next";
// import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { switchUserAddBookingModalVisibility } from "../../../../../../redux/modalSlice";
import { Wrapper } from "./style";

const AddBooking = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { userAddBookingModalVisibility } = useSelector((state) => state.modal);
  const { selectedUser } = useSelector((state) => state.user);
  const { RangePicker } = DatePicker;
  // const queryClient = useQueryClient();
  // const userData = queryClient.getQueryData(`user/${selectedUser.userID}`);

  return (
    <Modal
      okText={t("empty_places.information.add")}
      open={userAddBookingModalVisibility.open}
      title={t("modal.add_booking")}
      onCancel={() =>
        dispatch(
          switchUserAddBookingModalVisibility({ open: false, loading: false })
        )
      }
      footer={false}
    >
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
          roomNumber: selectedUser.userID,
        }}
      >
        <Form.Item
          rules={[
            { required: true, message: t("empty_places.edit.name_error") },
          ]}
          label={t("empty_places.information.full_name")}
          name="full name"
        >
          <Input />
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
            {
              required: true,
              message: t("empty_places.edit.phone_number_error"),
            },
          ]}
          label={t("empty_places.information.phone_number")}
          name="phone number"
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
            {
              required: true,
              message: t("empty_places.edit.prepaid_error"),
            },
          ]}
          label={t("empty_places.information.prepaid")}
          name="prepaid"
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          label={t("empty_places.information.building_number")}
          name="building number"
        >
          {/* <Select disabled /> */}
          <Input disabled />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          label={t("empty_places.information.room_number")}
          name="room number"
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
    </Modal>
  );
};

export default AddBooking;
