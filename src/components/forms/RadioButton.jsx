import React from "react";

const RadioButton = ({ name, value, checked, onChange, label }) => {
  return (
    <div className="flex items-center">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-red-600 h-4 w-4 border bg-[rgb(131,169,7)]"
      />
      <label className="ml-2 text-gray-700">{label}</label>
    </div>
  );
};

export default RadioButton;
