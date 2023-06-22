import { Modal } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchDetailedModalVisibility } from "../../../../../../redux/modalSlice";
import useBuildingDetector from "../../../../../../tools/buildingDetectors";
import { Wrapper } from "../../../User/Observing/style";

const DetailedModal = () => {
  const { selectedBookedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { detailedModalVisibility } = useSelector((state) => state.modal);
  const { decodeBuilding } = useBuildingDetector();
  const { t } = useTranslation();

  return (
    <Modal
      title={t("modal.detailed")}
      open={detailedModalVisibility}
      onCancel={() => dispatch(switchDetailedModalVisibility())}
      footer={false}
    >
      <Wrapper>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.full_name")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {selectedBookedUser?.fullName}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.phone_number")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {selectedBookedUser?.phoneNumber}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.address")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {selectedBookedUser?.address}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.came_date")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {dayjs(selectedBookedUser?.arrivalDate).format("DD/MM/YYYY")}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.end_date")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {dayjs(selectedBookedUser?.endDate).format("DD/MM/YYYY")}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.prepaid")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {+selectedBookedUser?.prePaid}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.building_number")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {decodeBuilding(selectedBookedUser?.buildingNumber).label}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.room_number")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {selectedBookedUser?.roomNumber}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
      </Wrapper>
    </Modal>
  );
};

export default DetailedModal;
