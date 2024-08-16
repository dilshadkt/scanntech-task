import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SideBar from "../../components/dashboard/sidebar";
import { sidebar } from "../../constants/sidebar";
import MObileNav from "../../components/dashboard/sidebar/mobile-nav";

const DashboardLayout = () => {
  return (
    <>
      <main className="bg-black h-screen overflow-hidden w-full">
        <div className="w-full h-full bg-secondary relative rounded-[52px] p-4 flex">
          <SideBar />
          <div className="sm:ml-3 h-full w-full flex-1 rounded-3xl p-1 ">
            <Outlet />
          </div>
        </div>
      </main>
      <MObileNav />
    </>
  );
};

export default DashboardLayout;
