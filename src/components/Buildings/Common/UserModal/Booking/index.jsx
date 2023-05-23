import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import EmptyBooking from "./EmptyUI";

const Booking = () => {
  const { selectedUser } = useSelector((state) => state.user);

  const cellID = selectedUser?.roomValue?.clienteValue?.clienteID;
  const foundData = selectedUser?.roomValue?.roomValue?.bookedCliente?.find(
    (value) => value.bookedClienteID === cellID
  );
  console.log(foundData, "foundData");
  // console.log(cellID, "cellID");
  // console.log(selectedUser);

  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData(`user/${selectedUser.userData}`);

  console.log(userData, "userData");

  return (
    <div>
      {selectedUser?.roomValue?.clienteValue?.isBooked ? (
        "hello"
      ) : (
        <EmptyBooking />
      )}
    </div>
  );
};

export default Booking;
