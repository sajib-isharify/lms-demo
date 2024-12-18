import React from "react";
import PropTypes from "prop-types";

const InputUrl = ({ id, placeholder, value, onChange, required, error }) => {
  return (
    <input
      type="url"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`
        w-full px-4 py-1 text-white bg-gray-800 border rounded focus:outline-none focus:ring-2
        ${error ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-green-500"}
      `}
    />
  );
};

InputUrl.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default InputUrl;
