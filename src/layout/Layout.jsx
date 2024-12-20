import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import TabComponent from "../components/forms/TabComponent";
import MyForm from "../components/forms/MyForm";
import SignIn from "../components/forms/SignIn";
import DropdownMenu from "../components/forms/DropdownMenu";
import RadioButton from "../components/forms/RadioButton";
import ToggleSwitch from "../components/forms/ToggleSwitch";

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
            {/* <TabComponent /> */}
            {/* <MyForm /> */}
            {/* <SignIn /> */}
            {/* <DropdownMenu /> */}
            {/* <RadioButton /> */}
            {/* <ToggleSwitch /> */}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
