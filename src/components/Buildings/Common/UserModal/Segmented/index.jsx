import { Segmented } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Booked from "../Booking";
import Editing from "../../User/Editing";
import Observing from "../../User/Observing";

const SegmentedSection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(
    t("empty_places.information.observing")
  );
  const checker = (selectedCategory) => {
    switch (selectedCategory) {
      case t("empty_places.information.editing"):
        return <Editing />;
      case t("empty_places.information.booking"):
        return <Booked />;
      case t("empty_places.information.observing"):
        return <Observing />;
      default:
        <Observing />;
    }
  };

  return (
    <>
      <Segmented
        block
        defaultValue={t("empty_places.information.observing")}
        options={[
          t("empty_places.information.observing"),
          t("empty_places.information.booking"),
          t("empty_places.information.editing"),
        ]}
        style={{ margin: "20px 0" }}
        onChange={(e) => setSelectedCategory(e)}

        // onChange={(value) => setSelectedCategory(value)}
      />
      {checker(selectedCategory)}

      {/* {selectedCategory === "Editing" ? (
        <Editing />
      ) : selectedCategory === "Booking" ? (
        <Booked />
      ) : (
        <Observing />
      )} */}
    </>
  );
};

export default SegmentedSection;
