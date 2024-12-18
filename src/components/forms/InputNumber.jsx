import React from "react";
import PropTypes from "prop-types";

const InputNumber = ({ id, placeholder, value, onChange, required, error, prefix }) => {
  return (
    <div className="relative w-full">
      {prefix && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">{prefix}</div>}
      <input
        type="number"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
        w-full px-4 py-1 ${prefix ? "pl-8" : "pl-4"} text-white bg-gray-800 border rounded focus:outline-none focus:ring-2
        ${error ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-green-500"}
      `}
      />
    </div>
  );
};

InputNumber.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default InputNumber;
