import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={`relative inline-flex items-center h-7 w-12 rounded-full cursor-pointer transition-colors bg-[#94969C]`} onClick={handleToggle}>
      <span
        className={`inline-block w-6 h-6 bg-[#333741] rounded-full transform transition-transform 
          ${isOn ? "translate-x-5" : "translate-x-1"}`}
      />
    </div>
  );
};

export default ToggleSwitch;
