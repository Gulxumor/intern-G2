import { Card, Descriptions, Dropdown } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import useDropDownAPI from "../../../../../../generic/DropDownAPI";
import { useQueryHandler } from "../../../../../../hooks/useQuery";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import {
  switchDetailedModalVisibility,
  switchEditModalVisibility,
} from "../../../../../../redux/modalSlice";
import { useDeleteBookedUser } from "../../../../../../hooks/useQuery/useQueryActions";
import { setSelectedBookedUser } from "../../../../../../redux/userSlice";

const BookedCard = ({ id }) => {
  const { mutate } = useDeleteBookedUser();
  const dispatch = useDispatch();
  const { bookedDropdown } = useDropDownAPI();
  const { data, isLoading } = useQueryHandler({
    queryKey: `booked-user/${id}`,
    queryLink: `/accomodation/2/booked-user?_id=${id}`,
  });
  return (
    <Card loading={isLoading} style={{ marginTop: "20px" }}>
      <Descriptions
        title={data?.fullName}
        layout="vertical"
        extra={
          <Dropdown
            menu={{
              items: bookedDropdown({
                inDetail: () => {
                  dispatch(switchDetailedModalVisibility());
                  dispatch(setSelectedBookedUser(data));
                },
                onEdit: () => dispatch(switchEditModalVisibility()),
                onDelete: () => mutate({ body: data }),
              }),
            }}
            trigger={["click"]}
          >
            <EllipsisOutlined />
          </Dropdown>
        }
      >
        <Descriptions.Item label="Start Date:">
          {dayjs(+data?.startDate).format("DD/MM/YYYY")}
        </Descriptions.Item>
        <Descriptions.Item label="End Date:">
          {dayjs(+data?.endDate).format("DD/MM/YYYY")}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default BookedCard;
