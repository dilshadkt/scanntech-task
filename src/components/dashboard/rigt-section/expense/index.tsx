import React, { useState } from "react";
import DropDown from "../../../common/dropdown";
import { weekData } from "../../../../constants/dashboard";
import BarChartGraph from "../../charts/bar-chart";

const Expenses = () => {
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);
  return (
    <div className="w-full  min-h-[230px] h-[260px]  p-4 rounded-3xl bg-white  flex flex-col justify-between shadow-sm">
      <div className="flexBetween">
        <h5 className="text-lg font-medium">Expensesr</h5>
        <DropDown
          data={weekData}
          selectedItem={selectedWeek}
          setSelectedItem={setSelectedWeek}
        />
      </div>
      <BarChartGraph selectedWeek={selectedWeek} data={weekData} />
    </div>
  );
};

export default Expenses;
