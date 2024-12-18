import React, { useState } from "react";
import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";

export const Checkbox = ({ id, checked, onChange, disabled, error }) => {
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = checked !== undefined && onChange !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleChange = (e) => {
    if (!disabled) {
      if (isControlled) {
        onChange(e);
      } else {
        setInternalChecked(e.target.checked);
      }
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="relative flex items-center justify-center w-6 h-6">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
        <div
          className={`
            w-6 h-6 flex items-center justify-center rounded-lg 
            border-2 transition-all duration-200 ease-in-out
            ${isChecked ? "bg-[rgb(131,169,7)] border-[rgb(131,169,7)]" : "bg-gray-800 border-gray-700"}
            ${disabled ? "cursor-not-allowed opacity-50" : "hover:border-[rgb(131,169,7)]"}
            ${error ? "border-red-500" : ""}
          `}
        >
          {isChecked && <TiTick className="text-white text-lg" />}
        </div>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Checkbox;
