import { Room } from "../../../../generic/Style";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { useQueryHandler } from "../../../../hooks/useQuery";
import { switchUserModalVisibility } from "../../../../redux/modalSlice";
import { switchSetSelectedUserID } from "../../../../redux/userSlice";
import { useDispatch } from "react-redux";

const Fourth = ({ userID }) => {
  const { data, isLoading } = useQueryHandler({
    queryKey: `user/${userID}`,
    queryLink: `/accomodation/4/user?_id=${userID}`,
  });
  const dispatch = useDispatch();
  const roomClickDetector = () => {
    dispatch(switchUserModalVisibility());
    dispatch(switchSetSelectedUserID(userID));
  };
  return (
    <Room color={"red"} onClick={() => roomClickDetector()}>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        dayjs(new Date(+data?.endDate)).diff(new Date(), "d")
      )}
    </Room>
  );
};

export default Fourth;
