import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import Form from "./Form";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="relative flex border-b border-gray-700">
        <Tab index={1} activeTab={activeTab} onClick={handleTabClick} label="Tab 1" />
        <Tab index={2} activeTab={activeTab} onClick={handleTabClick} label="Tab 2" />
        <Tab index={3} activeTab={activeTab} onClick={handleTabClick} label="Tab 3" />
      </div>

      <div className="mt-6">
        {activeTab === 1 && (
          <TabContent title="">
            <Form
              fields={[
                { label: "First Name", type: "text" },
                { label: "Last Name", type: "text" },
              ]}
            />
          </TabContent>
        )}

        {activeTab === 2 && (
          <TabContent title="">
            <Form
              fields={[
                { label: "Email", type: "email" },
                { label: "Password", type: "password" },
              ]}
            />
          </TabContent>
        )}

        {activeTab === 3 && (
          <TabContent title="">
            <Form
              fields={[
                { label: "Username", type: "text" },
                { label: "Phone Number", type: "text" },
              ]}
            />
          </TabContent>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
