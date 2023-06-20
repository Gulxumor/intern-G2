import { Modal } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
// import { useQueryHandler } from "../../../../../../hooks/useQuery";
import { switchDetailedModalVisibility } from "../../../../../../redux/modalSlice";
import useBuildingDetector from "../../../../../../tools/buildingDetectors";
import { Wrapper } from "../../../User/Observing/style";

const DetailedModal = () => {
  const { selectedUser } = useSelector((state) => state.user);
  console.log(selectedUser);
  const dispatch = useDispatch();
  const { detailedModalVisibility } = useSelector((state) => state.modal);

  const { decodeBuilding } = useBuildingDetector();
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(`user/${selectedUser.userID}`);
  const { t } = useTranslation();

  return (
    <Modal
      title="In detailed"
      open={detailedModalVisibility}
      onCancel={() => dispatch(switchDetailedModalVisibility())}
    >
      <Wrapper>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.full_name")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>{userData?.fullName}</Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.phone_number")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {userData?.phoneNumber}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.address")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>{userData?.address}</Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.came_date")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {dayjs(userData?.arrivalDate).format("DD/MM/YYYY")}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.end_date")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {dayjs(userData?.endDate).format("DD/MM/YYYY")}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.payment_difference")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {userData?.paidByCash +
              userData?.paidByPlasticCard -
              userData?.total}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.building_number")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {decodeBuilding(userData?.buildingNumber).label}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
        <Wrapper.InfoWrap>
          <Wrapper.InfoWrap.Value>
            {t("empty_places.information.room_number")}:
          </Wrapper.InfoWrap.Value>
          <Wrapper.InfoWrap.Value>
            {userData?.roomNumber}
          </Wrapper.InfoWrap.Value>
        </Wrapper.InfoWrap>
      </Wrapper>
    </Modal>
  );
};

export default DetailedModal;
