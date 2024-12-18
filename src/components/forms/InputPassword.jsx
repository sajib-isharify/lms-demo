import React, { useState } from "react";
import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";

const InputPassword = ({ id, placeholder, value, onChange, required, error }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-1 text-gray-300 bg-gray-800 border rounded focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-green-500"}
        `}
      />
      <button type="button" onClick={toggleVisibility} className="absolute inset-y-0 right-4 flex items-center text-gray-400">
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
};

InputPassword.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default InputPassword;
