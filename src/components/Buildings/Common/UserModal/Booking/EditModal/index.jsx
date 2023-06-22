import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useUpdatedUser } from "../../../../../../hooks/useQuery/useQueryActions";
import { switchEditModalVisibility } from "../../../../../../redux/modalSlice";
import useBuildingDetector from "../../../../../../tools/buildingDetectors";

const { RangePicker } = DatePicker;
const EditModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { editModalVisibility } = useSelector((state) => state.modal);
  const { selectedBookedUser } = useSelector((state) => state.user);
  // console.log(selectedBookedUser, "selectedBookedUser");
  const { options } = useBuildingDetector();
  const { mutate } = useUpdatedUser();

  const updateBookedUser = (e) => {
    const formattedData = {
      ...selectedBookedUser,
      ...e,
      arrivalDate: new Date(e.arrivalDate[0].$d).getTime(),
      endDate: new Date(e.arrivalDate[1].$d).getTime(),
    };
    mutate(formattedData);
    // notification({ type: "success", message: "Сохранено" });
    dispatch(switchEditModalVisibility());
  };

  return (
    <Modal
      title={t("modal.change_booking")}
      open={editModalVisibility}
      onCancel={() => dispatch(switchEditModalVisibility())}
      footer={false}
    >
      {" "}
      <Form
        layout="vertical"
        initialValues={{
          fullName: selectedBookedUser.fullName,
          address: selectedBookedUser.address,
          phoneNumber: selectedBookedUser.phoneNumber,
          arrivalDate: [
            dayjs(Number(selectedBookedUser?.arrivalDate)),
            dayjs(Number(selectedBookedUser?.endDate)),
          ],
          prePaid: selectedBookedUser.prePaid,
          buildingNumber: `${selectedBookedUser?.buildingNumber}`,
          roomNumber: selectedBookedUser.roomNumber,
        }}
        name="basic"
        labelCol={{
          span: 15,
        }}
        wrapperCol={{
          span: 24,
        }}
        style={{
          width: "100%",
        }}
        onFinish={(e) => updateBookedUser(e)}
      >
        <Form.Item
          label={t("empty_places.information.full_name")}
          name="fullName"
          rules={[
            {
              required: true,
              message: t("empty_places.edit.name_error"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("empty_places.information.address")}
          name="address"
          rules={[
            {
              required: true,
              message: t("empty_places.edit.address_error"),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={t("empty_places.information.phone_number")}
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: t("empty_places.edit.phone_number_error"),
            },
          ]}
        >
          <Input addonBefore={"+998"} type="number" />
        </Form.Item>
        <Form.Item
          label={t("empty_places.edit.range_error")}
          name="arrivalDate"
          rules={[
            {
              required: true,
              message: t("empty_places.edit.datapicker_error"),
            },
          ]}
        >
          <RangePicker
            defaultValue={dayjs("", "DD.MM.YYYY")}
            format={"DD.MM.YYYY"}
          />
        </Form.Item>
        <Form.Item
          label={t("empty_places.information.prepaid")}
          name="prePaid"
          rules={[
            {
              required: true,
              message: t("empty_places.edit.prepaid_error"),
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label={t("empty_places.information.building_number")}
          name="buildingNumber"
          rules={[
            {
              required: true,
              message: t("empty_places.edit.building_error"),
            },
          ]}
        >
          <Select disabled options={options} />
        </Form.Item>
        <Form.Item
          label={t("empty_places.information.room_number")}
          name="roomNumber"
          rules={[
            {
              required: true,
              message: t("empty_places.edit.room_error"),
            },
          ]}
        >
          <Input disabled type="number" />
        </Form.Item>
        <Form.Item
          style={{ display: "flex", gridGap: "20px", justifyContent: "end" }}
        >
          <Button
            style={{ marginRight: "10px" }}
            onClick={() => dispatch(switchEditModalVisibility())}
          >
            {t("empty_places.information.cancel")}
          </Button>
          <Button type="primary" htmlType="submit">
            {t("empty_places.information.edit")}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
