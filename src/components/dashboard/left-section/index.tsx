import React, { useState } from "react";
import { data, tableData } from "../../../constants/dashboard";
import {
  Add,
  Down,
  DownArrow,
  Filter,
  GreenChart,
  Menu,
  RedChart,
  Threedot,
  Up,
} from "../../../constants/icons";
import { Eourop, Us } from "../../../constants/images";
import IncomeCard from "../income-card";
import IncomeGraph from "../charts/area";
import IconButton from "../../common/iconButton";

const LeftSection = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMonthSelect = (month: string) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
  };
  return (
    <div className="flex-1 lg:h-full md:pr-4 ">
      {/* First Row  */}
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
        {/* Icome card  */}
        <div className=" rounded-3xl flex  min-h-[230px] justify-between bg-white flex-col overflow-hidden  h-full p-4 md:p-5">
          <div className="flexBetween">
            <h5 className="text-lg font-medium">Income</h5>
            <div className="relative">
              <div
                className="flexCenter cursor-pointer bg-[#CCFFCD] rounded-full px-2 py-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-xs font-medium mr-2">
                  {selectedMonth || "Month"}
                </span>
                <img src={DownArrow} alt="down arrow" />
              </div>
              {isDropdownOpen && (
                <div className="absolute z-50 top-full right-0 mt-1 bg-white shadow-lg rounded-md">
                  {data.map((item) => (
                    <div
                      key={item.name}
                      className="px-4 py-1 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleMonthSelect(item.name)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className=" h-full  w-full  ">
            {/* <h2>Income</h2>
        <p>+14.4%</p> */}
            <IncomeGraph data={data} selectedMonth={selectedMonth} />
          </div>
        </div>
      </div>
      {/* Second Row   */}
      <div className="grid grid-cols-1 md:grid-cols-3 my-4 gap-4">
        <IncomeCard
          income="1,400"
          pathColor="#00FF6B
"
          percentage={70}
          icon={GreenChart}
        />
        <IncomeCard
          income="1,400"
          pathColor="#FF6756"
          percentage={55}
          icon={RedChart}
        />
        {/* Currenceies Market  */}
        <div className="h-[180px] rounded-3xl shadow-sm bg-white flex flex-col justify-between p-5">
          <h4 className="font-medium  md:text-lg">Currencies Market</h4>
          <div className="grid grid-cols-1 gap-3">
            <div className="flexBetween">
              <div className="flexStart">
                <div className="w-10 h-10 rounded-full flexCenter">
                  <img
                    src={Us}
                    alt="flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col ml-2">
                  <h5 className="sm font-medium">USD</h5>
                  <span className="text-xs text-[#B6B6B6]">0.73</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="font-medium">105.27</h5>
                <div className="felxStart text-[10px]">
                  <span>+14.4%</span>
                </div>
              </div>
            </div>
            <div className="flexBetween">
              <div className="flexStart">
                <div className="w-10 h-10 rounded-full flexCenter">
                  <img
                    src={Eourop}
                    alt="flag"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col ml-2">
                  <h5 className="sm font-medium">USD</h5>
                  <span className="text-xs text-[#B6B6B6]">0.73</span>
                </div>
              </div>
              <div className="flex flex-col">
                <h5 className="font-medium">105.27</h5>
                <div className="felxStart text-[10px]">
                  <span>+14.4%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third row  - Currencies Market */}
      <div className="bg-white w-full h-fit p-4 md:p-5 rounded-3xl">
        {/* Table navbar */}
        <div className="flexBetween ">
          <h5 className="md:text-lg font-medium">Currencies Market</h5>
          <div className="flexStart gap-2">
            <div className="cursor-pointer">
              <img
                src={Filter}
                alt="filter"
                width={25}
                className="w-5 md:w-[25px]"
              />
            </div>
            <div className="cursor-pointer">
              <img
                src={Menu}
                alt="filter"
                width={25}
                className="w-5 md:w-[25px]"
              />
            </div>
          </div>
        </div>
        <table className="w-full border-collapse mt-2 overflow-x-auto ">
          <thead className="text-[#B6B6B6]">
            <tr>
              <th className="text-left py-2  font-normal">Name</th>
              <th className="text-center py-2  font-normal">Amount</th>
              <th className="text-center py-2  font-normal">Date</th>
              <th className="text-center py-2 hidden sm:block font-normal">
                Status
              </th>
              <th className="py-2  w-12"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td className="text-left py-1 md:py-3 flex  items-start md:items-center   flex-col md:flex-row">
                  <div className="w-10 h-10 rounded-lg flexCenter  bg-[#F3F4F7]">
                    <img
                      src={row.icon}
                      width={25}
                      alt=""
                      className="w-5 md:w-[25px]"
                    />
                  </div>
                  <h4 className="  md:ml-3 text-xs md:text-base mt-1 md:mt-0 text-center md:text-left">
                    {row.name}
                  </h4>
                </td>
                <td className="text-center text-sm md:text-base py-3">
                  {row.amount}
                </td>
                <td className="text-center py-3 text-sm md:text-base whitespace-nowrap">
                  {row.date}
                </td>
                <td className="hidden sm:flexCenter text-center py-3 ">
                  <span className=" text-[10px] md:text-xs px-3 py-[2px] w-fit rounded-full flexCenter bg-green-300">
                    <div className="w-[5px] h-[5px] rounded-full bg-green-800 mr-1"></div>
                    {row.status}
                  </span>
                </td>
                <td className="py-2">
                  <div className="flexCenter">
                    <img
                      src={Threedot}
                      alt="options"
                      width={25}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeftSection;
