import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("linked");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <div className="relative">
        <select
          onFocus={toggleDropdown}
          onBlur={toggleDropdown}
          value={selectedValue}
          onChange={handleChange}
          className="w-full appearance-none bg-[#333741] text-white px-6 py-4 rounded-xl border border-[#333741] text-2xl font-normal pr-12 focus:outline-none "
        >
          <option value="both">Both</option>
          <option value="linked" selected>
            Linked Items
          </option>
          <option value="unlinked">Unlinked Items</option>
        </select>

        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-white">
          {isOpen ? <IoIosArrowUp className="w-6 h-6" /> : <IoIosArrowDown className="w-6 h-6" />}
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
