import React from "react";
import { PaymeentCardProps } from "../../../types";

const PaymentCard = ({
  amount,
  icon,
  number,
  date,
  className,
}: PaymeentCardProps) => {
  return (
    <div
      className={`min-w-[200px] flex flex-col justify-between h-full  p-4  rounded-3xl ${className}`}
    >
      <div className="flexBetween">
        <h5 className="text-xl font-medium">${amount}</h5>
        <img src={icon} alt="visa" width={42} />
      </div>
      <div className="flexBetween text-sm">
        <h6 className="font-medium">***{number}</h6>
        <h6>{date}</h6>
      </div>
    </div>
  );
};

export default PaymentCard;
