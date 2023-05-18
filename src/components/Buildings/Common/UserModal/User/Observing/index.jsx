import dayjs from "dayjs";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { Wrapper } from "./style";

const Observing = () => {
  const { selectedUserID } = useSelector((state) => state.user);

  const queyClient = useQueryClient();
  const data = queyClient.getQueryData(`user/${selectedUserID}`);
  return (
    <div>
      {!"isLoading" && (
        <>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Name:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{data?.fullName}</Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Birth Date:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{data?.birthDate}</Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Passport Number:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{data?.passportID}</Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Phone Number:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value></Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Address:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{data?.address}</Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Arrival date:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {dayjs(data?.arrivalDate).format("DD/MM/YYYY")}
            </Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>End date:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {dayjs(data?.endDate).format("DD/MM/YYYY")}
            </Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Remaining days:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {dayjs(data?.arrivalDate).diff(data?.endDate, "d")}
            </Wrapper.InfoWrap.Value>
          </Wrapper>{" "}
          <Wrapper>
            <Wrapper.InfoWrap.Value>Daily Price:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{data?.dayCost}</Wrapper.InfoWrap.Value>
          </Wrapper>{" "}
          <Wrapper>
            <Wrapper.InfoWrap.Value>Total Price:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{data?.total}</Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Voucher Status:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {data?.hasVoucher ? "With" : "Without"} voucher
            </Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Pay By Cash:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value></Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Pay By Card:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value></Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Payment difference:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {data?.paidByCash + data.paidByPlasticCard - data.total}
            </Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Building number:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>
              {data?.buildingNumber.split("-").join(" ")}
            </Wrapper.InfoWrap.Value>
          </Wrapper>
          <Wrapper>
            <Wrapper.InfoWrap.Value>Room number:</Wrapper.InfoWrap.Value>
            <Wrapper.InfoWrap.Value>{data?.roomNumber}</Wrapper.InfoWrap.Value>
          </Wrapper>
        </>
      )}
    </div>
  );
};

export default Observing;
