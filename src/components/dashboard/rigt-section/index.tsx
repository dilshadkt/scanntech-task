import React, { useState } from "react";
import { Add, DownArrow, Navigation, Plus } from "../../../constants/icons";
import {
  Avatar,
  Avatar2,
  Avatar3,
  Avatar4,
  Uk,
  Visa,
} from "../../../constants/images";
import AvatarLabel from "../../common/avatarLabel";
import PaymentCard from "../../common/paymentCard/PaymentCard";
import { weekData } from "../../../constants/dashboard";
import DropDown from "../../common/dropdown";
import BarChartGraph from "../charts/bar-chart";

const RightSection = () => {
  const [selectedWeek, setSelectedWeek] = useState<string | null>(null);

  return (
    <div className=" lg:w-[350px] mt-4 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4  h-full">
      {/* Your cards section  */}
      <div className="w-full  min-h-[230px] rounded-3xl bg-white shadow-sm p-4 flex flex-col justify-between">
        <div className="flexBetween">
          <div>
            <h4 className="text-lg font-medium">Your cards</h4>
            <span className="px-2 py-[2px] rounded-full text-xs font-medium bg-gray-200">
              premium
            </span>
          </div>
          <div className="flexCenter rounded-full cursor-pointer">
            <img src={Plus} alt="add icon" width={35} />
          </div>
        </div>
        <div className="flexStart  h-full mt-5 overflow-x-auto gap-3">
          <PaymentCard
            amount="2,981"
            icon={Visa}
            number="1777"
            date="20/26"
            className="bg-black text-white"
          />
          <PaymentCard
            amount="2,981"
            icon={Visa}
            number="1777"
            date="20/26"
            className="bg-[#F3F4F7] text-black"
          />
        </div>
      </div>
      {/* Quick Transfer  */}
      <div className="w-full  min-h-[230px]  p-4 rounded-3xl bg-white flex flex-col justify-between shadow-sm">
        <div className="flexBetween">
          <h5 className="text-lg font-medium">Quick Transfer</h5>
          <button className="text-[#4660F2] text-sm">View all</button>
        </div>
        <div className="grid grid-cols-5 gap-2 h-full my-4 ">
          <AvatarLabel avatar={Avatar} name="Victoria" />
          <AvatarLabel avatar={Avatar2} name="David j." />
          <AvatarLabel avatar={Avatar3} name="Mike" />
          <AvatarLabel avatar={Avatar4} name="Steven" />
          {/* Create avatar button  */}
          <div className="h-full rounded-full border-2 border-dashed cursor-pointer flexCenter p-[6px] flex-col">
            <div className="w-full aspect-square rounded-full flexCenter">
              <img
                src={Add}
                alt="avatar one"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="rounded-full p-2 px-3yup bg-[#F3F4F7] flexBetween">
          <div className="flexStart">
            <div className="rounded-full w-7 h-7 flexCenter">
              <img src={Uk} alt="uk" />
            </div>
            <span className="text-2xl font-medium ml-2">$2,760</span>
          </div>
          <div className="w-7 h-7 bg-white rounded-full flexCenter">
            <img src={Navigation} alt="navigation" />
          </div>
        </div>
      </div>
      {/* Exprenses  */}
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
    </div>
  );
};

export default RightSection;
