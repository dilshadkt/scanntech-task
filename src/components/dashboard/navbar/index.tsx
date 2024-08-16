import React, { useEffect, useState } from "react";
import { Notification, Search, Settngs } from "../../../constants/icons";
import { Avatar } from "../../../constants/images";
import { fetUserData } from "../../../services/api";
import { UserDataProps } from "../../../types";

const Navbar = () => {
  const [user, setUser] = useState<UserDataProps>();
  useEffect(() => {
    fetUserData().then((res) => setUser(res));
  }, []);
  const [searh, setSearch] = useState("");
  return (
    <div className="bg-white h-[60px] rounded-full flexBetween md:p-3 px-2 md:px-5">
      <h4 className="font-semibold hidden md:block">Overview</h4>
      <div className="flexBetween md:flexStart  w-full md:w-fit  gap-2 md:gap-5">
        <div className="relative  h-full">
          <input
            type="text"
            value={searh}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Serach"
            className="rounded-full bg-[#F3F4F7] *: h-full p-2 py-3 placeholder-black  text-xs pl-9 flexStart"
          />
          <img
            src={Search}
            alt="search"
            width={20}
            className="absolute top-0 bottom-0 my-auto left-2"
          />
        </div>
        <div className="flexStart  gap-1 md:gap-5 ">
          <img
            className="cursor-pointer "
            src={Settngs}
            alt="settings"
            width={25}
          />
          <img
            className="cursor-pointer"
            src={Notification}
            alt="settings"
            width={25}
          />
          <hr className="h-5 w-[1.4px] bg-[#B6B6B6] mx-2" />
          <div className=" cursor-pointer flexStart md:mx-2">
            <div className="flexCenter w-10 h-10 rounded-full overflow-hidden">
              <img
                src={Avatar}
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" hidden md:flex flex-col ml-2">
              <p className="text-xs text-[#B6B6B6]">
                @wiiliamBill{" "}
                <span className="flag text-black font-medium ">Pro</span>
              </p>
              <h5 className="text-sm font-medium">{user?.username}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
