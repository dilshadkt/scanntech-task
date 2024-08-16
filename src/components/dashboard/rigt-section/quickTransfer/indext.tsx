import React, { useEffect, useState } from "react";
import AvatarLabel from "../../../common/avatarLabel";
import {
  Avatar,
  Avatar2,
  Avatar3,
  Avatar4,
  Uk,
} from "../../../../constants/images";
import { Add, Navigation } from "../../../../constants/icons";
import { fetchTranserdUserData } from "../../../../services/api";

const QuickTransfer = () => {
  const [transferUser, setTransferUser] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    fetchTranserdUserData().then((res) => {
      setIsloading(false);
      setTransferUser(res);
    });
  }, []);
  // tranferUser  here we have the entire user data we can map
  return (
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
  );
};

export default QuickTransfer;
