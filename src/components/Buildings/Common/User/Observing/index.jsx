import { Button } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useDeleteUser } from "../../../../../hooks/useQuery/useQueryActions";
import useBuildingDetector from "../../../../../tools/buildingDetectors";
import EmptySpace from "../EmptySpace";
import { Wrapper } from "./style";

const Observing = () => {
  const { decodeBuilding } = useBuildingDetector();
  const { selectedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(`user/${selectedUser.userID}`);
  const { t } = useTranslation();
  const { mutate } = useDeleteUser();

  const deleteHandler = () => {
    mutate({
      body: {
        roomNumber: selectedUser.roomValue.roomNumber,
        clienteID: selectedUser.clienteValue.clienteID,
        _id: selectedUser.userID,
      },
    });
  };

  return (
    <Wrapper>
      {!selectedUser.userID ? (
        <EmptySpace />
      ) : (
        <>
          <Wrapper.InfoWrap>
            <Wrapper.InfoWrap.Value>
              {t("empty_places.information.full_name")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {userData?.fullName}
            </Wrapper.InfoWrap.Value>
          </Wrapper.InfoWrap>
          <Wrapper.InfoWrap>
            <Wrapper.InfoWrap.Value>
              {t("empty_places.information.birth_date")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {dayjs(userData?.birthDate).format("DD/MM/YYYY")}
            </Wrapper.InfoWrap.Value>
          </Wrapper.InfoWrap>
          <Wrapper.InfoWrap>
            <Wrapper.InfoWrap.Value>
              {t("empty_places.information.passport_number")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {userData?.passportID}
            </Wrapper.InfoWrap.Value>
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
              {t("empty_places.information.remaining_days")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {dayjs(userData?.arrivalDate).diff(userData?.endDate, "d")}
            </Wrapper.InfoWrap.Value>
          </Wrapper.InfoWrap>
          <Wrapper.InfoWrap>
            <Wrapper.InfoWrap.Value>
              {t("empty_places.information.daily_price")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{userData?.dayCost}</Wrapper.InfoWrap.Value>
          </Wrapper.InfoWrap>
          <Wrapper.InfoWrap>
            <Wrapper.InfoWrap.Value>
              {t("empty_places.information.total_price")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{userData?.total}</Wrapper.InfoWrap.Value>
          </Wrapper.InfoWrap>
          <Wrapper.InfoWrap>
            <Wrapper.InfoWrap.Value>
              {t("empty_places.information.vouncher_status")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {userData?.hasVoucher
                ? t("empty_places.information.with")
                : t("empty_places.information.without")}
            </Wrapper.InfoWrap.Value>
          </Wrapper.InfoWrap>
          <Wrapper.InfoWrap>
            <Wrapper.InfoWrap.Value>
              {t("empty_places.information.pay_by_cash")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {userData?.paidByCash}
            </Wrapper.InfoWrap.Value>
          </Wrapper.InfoWrap>
          <Wrapper.InfoWrap>
            <Wrapper.InfoWrap.Value>
              {t("empty_places.information.pay_by_card")}:
            </Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {userData?.paidByPlasticCard}
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
          <Wrapper.ButtonWrapper>
            <Button>{t("empty_places.information.cancel")}</Button>
            <Button type="primary">{t("empty_places.information.move")}</Button>
            <Button onClick={deleteHandler} danger type="primary">
              {t("empty_places.information.delete")}
            </Button>
          </Wrapper.ButtonWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Observing;
