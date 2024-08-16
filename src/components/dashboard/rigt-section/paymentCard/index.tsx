import React from "react";
import { Visa } from "../../../../constants/images";
import { Plus } from "../../../../constants/icons";
import PaymentCard from "../../../common/paymentCard/PaymentCard";

const PaymentSection = () => {
  return (
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
  );
};

export default PaymentSection;
