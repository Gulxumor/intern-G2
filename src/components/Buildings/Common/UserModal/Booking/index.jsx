import { useSelector } from "react-redux";
import BookedCard from "./BookedCard";
import EmptyBooking from "./EmptyUI";
import DetailedModal from "./DetailedModal";
import { useQueryClient } from "react-query";
import EditModal from "./EditModal";

const Booking = () => {
  const { selectedUser } = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const building = queryClient.getQueryData("accomodation/2");
  const cellID = selectedUser?.clienteValue?.clienteID;
  const foundData = building[
    selectedUser?.roomValue?.roomOrder
  ]?.bookedCliente?.find((value) => value.bookedClienteID === cellID);

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
    </div>
  );
};

export default Booking;
