import { Segmented } from "antd";
import { useState } from "react";
import Booked from "../User/Booking";
import Editing from "../User/Editing";
import Observing from "../User/Observing";

const SegmentedSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Observing");

  return (
    <>
      <Segmented
        block
        defaultValue={"Observing"}
        options={["Observing", "Booking", "Editing"]}
        onChange={(value) => setSelectedCategory(value)}
      />
      {selectedCategory === "Editing" ? (
        <Editing />
      ) : selectedCategory === "Booking" ? (
        <Booked />
      ) : (
        <Observing />
      )}
    </>
  );
};

export default SegmentedSection;
