import React from "react";
import { Eourop, Us } from "../../../../constants/images";
import { GreenChart, RedChart } from "../../../../constants/icons";
import IncomeCard from "../../income-card";

const IncomeSection = () => {
  return (
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
  );
};

export default IncomeSection;
