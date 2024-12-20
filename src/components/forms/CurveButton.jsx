import React from "react";

const CurveButton = ({ text = "Confirm", color = "rgb(199, 237, 48)", type = "button", onClick, className = "", fullWidth = false }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={buttonStyle}
      className={`text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 shadow-md ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {text}
    </button>
  );
};

export default CurveButton;
