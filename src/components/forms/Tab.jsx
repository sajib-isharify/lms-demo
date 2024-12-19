import React from "react";
import PropTypes from "prop-types";

const Tab = ({ index, activeTab, onClick, label }) => {
  return (
    <button
      onClick={() => onClick(index)}
      className={`relative px-4 py-2 text-sm font-semibold focus:outline-none
        ${activeTab === index ? "text-green-500" : "text-gray-500 hover:text-green-500"}
      `}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300
          ${activeTab === index ? "w-full bg-green-500 shadow-md shadow-green-500" : "w-0 bg-transparent"}`}
      />
    </button>
  );
};

Tab.propTypes = {
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Tab;
