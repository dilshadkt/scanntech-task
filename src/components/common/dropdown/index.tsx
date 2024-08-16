import React, { useState } from "react";
import { DownArrow } from "../../../constants/icons";

const DropDown = ({
  data,
  selectedItem,
  setSelectedItem,
}: {
  data: any;
  selectedItem: string | null;
  setSelectedItem: React.Dispatch<string | null>;
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const hadnleWeekSelect = (name: string) => {
    setIsDropDownOpen(false);
    setSelectedItem(name);
  };
  return (
    <div className="relative">
      <div
        className="flexCenter cursor-pointer bg-[#CCFFCD] rounded-full px-2 py-1"
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
      >
        <span className="text-xs font-medium mr-2">
          {selectedItem || "Week"}
        </span>
        <img src={DownArrow} alt="down arrow" />
      </div>
      {isDropDownOpen && (
        <div className="absolute z-50 top-full right-0 mt-1 bg-white shadow-lg rounded-md">
          {data.map((item: { name: string }) => (
            <div
              key={item.name}
              className="px-4 py-1 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => hadnleWeekSelect(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
