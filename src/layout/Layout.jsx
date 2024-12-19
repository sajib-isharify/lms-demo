import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TabComponent from "../components/forms/TabComponent";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark bg-[rgb(31,36,47)] dark:bg-slate-800">
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <div>Nav</div>

          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{<Outlet />}</div>
            <TabComponent />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
