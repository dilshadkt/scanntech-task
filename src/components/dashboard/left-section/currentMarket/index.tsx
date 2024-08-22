import React from "react";
import { Filter, Menu, Threedot } from "../../../../constants/icons";
import { tableData } from "../../../../constants/dashboard";

const CurrentMarket = () => {
  return (
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
                <span
                  className={`${
                    row.status === "Paid" ? "bg-red-500" : "bg-green-500"
                  } text-[10px] md:text-xs px-3 py-[2px] w-fit rounded-full flexCenter `}
                >
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
  );
};

export default CurrentMarket;
