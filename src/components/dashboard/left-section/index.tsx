import { useState } from "react";
import { data } from "../../../constants/dashboard";
import { Add, Down, Up } from "../../../constants/icons";
import DropDown from "../../common/dropdown";
import IconButton from "../../common/iconButton";
import IncomeGraph from "../charts/area";
import CurrentMarket from "./currentMarket";
import IncomeSection from "./income-cards";

const LeftSection = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  return (
    <div className="flex-1 lg:h-full md:pr-4 ">
      {/* First Row   card*/}
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[230px] gap-4">
        {/* Total Balance  */}
        <div className=" rounded-3xl flex min-h-[200px] md:min-h-[230px] justify-between flex-col bg-primary h-full p-4 md:p-5">
          <div className="relative ">
            <h5 className="text-base sm:text-lg font-medium">Total Balance</h5>
            <div className="flexStart">
              <h3 className="text-3xl sm:text-4xl md:text-5xl mt-2 font-semibold">
                $20,670
              </h3>
              <span className="ml-2 text-xs md:text-base font-semibold">
                USD
              </span>
            </div>
            <div className="absolute top-0 right-0 cursor-pointer">
              <img src={Add} alt="add" width={40} className="w-8 md:w-10" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <IconButton
              title="Deposit"
              icon={Down}
              className="bg-white  text-sm md:text-base py-3   rounded-full"
            />
            <IconButton
              title="Send"
              icon={Up}
              className="bg-black text-white text-sm md:text-base  py-3  rounded-full"
            />
          </div>
        </div>
        {/* Icome card  graph */}
        <div className=" rounded-3xl flex  min-h-[230px] justify-between bg-white flex-col overflow-hidden  h-full p-4 md:p-5">
          <div className="flexBetween">
            <h5 className="text-lg font-medium">Income</h5>
            <DropDown
              data={data}
              selectedItem={selectedMonth}
              setSelectedItem={setSelectedMonth}
            />
          </div>
          <div className=" h-full  w-full  ">
            {/* <h2>Income</h2>
        <p>+14.4%</p> */}
            <IncomeGraph data={data} selectedMonth={selectedMonth} />
          </div>
        </div>
      </div>
      {/* Second Row   */}
      <IncomeSection />
      {/* Third row  - Currencies Market */}
      <CurrentMarket />
    </div>
  );
};

export default LeftSection;
