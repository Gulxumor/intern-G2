import { useDispatch, useSelector } from "react-redux";
import BookedCard from "./BookedCard";
import EmptyBooking from "./EmptyUI";
import DetailedModal from "./DetailedModal";
import { useQueryClient } from "react-query";
import EditModal from "./EditModal";
import { ButtonWrapper } from "../../../../../generic/Style";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { switchUserAddBookingModalVisibility } from "../../../../../redux/modalSlice";

const Booking = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const building = queryClient.getQueryData("accomodation/2");
  const cellID = selectedUser?.clienteValue?.clienteID;
  const foundData = building[
    selectedUser?.roomValue?.roomOrder
  ]?.bookedCliente?.find((value) => value.bookedClienteID === cellID);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div>
      <DetailedModal />
      <EditModal />
      {selectedUser?.clienteValue?.isBooked ? (
        foundData?.bookedClienteList?.map((id) => (
          <BookedCard key={id} id={id} />
        ))
      ) : (
        <EmptyBooking />
      )}

      <ButtonWrapper>
        <Button>{t("empty_places.information.cancel")}</Button>
        <Button
          onClick={() => {
            dispatch(switchUserAddBookingModalVisibility());
            dispatch(
              switchUserAddBookingModalVisibility({
                open: true,
                loading: false,
              })
            );
          }}
          type="primary"
        >
          {t("empty_places.information.add")}
        </Button>
      </ButtonWrapper>
    </div>
  );
};

export default Booking;
