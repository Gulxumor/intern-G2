import { Modal, Segmented } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { switchMoveModalVisibility } from "../../../../redux/modalSlice";
import SecondMoveBuilding from "./Buildings/SecondMoveBuilding";

const Moving = () => {
  const dispatch = useDispatch();
  const { moveModalVisibility } = useSelector((state) => state.modal);
  const { t } = useTranslation();
  const [selectedBuilding, setSelectedBuilding] = useState("2");
  return (
    <Modal
      title={t("empty_places.information.move")}
      open={moveModalVisibility}
      onCancel={() => dispatch(switchMoveModalVisibility())}
      okText={t("empty_places.information.move")}
    >
      <Segmented
        onChange={(e) => setSelectedBuilding(e)}
        options={["2", "3", "4", "5", "6"]}
        defaultValue={"2"}
        block
      />
      {selectedBuilding === "2" && <SecondMoveBuilding />}
    </Modal>
  );
};

export default Moving;
