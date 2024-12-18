import React from "react";
import PropTypes from "prop-types";

const Label = ({ text, htmlFor, isRequired }) => {
  return (
    <label htmlFor={htmlFor} className="block text-white text-sm font-semibold mb-1">
      {text} {isRequired && <span className="text-red-500">*</span>}
    </label>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  htmlFor: PropTypes.string,
  isRequired: PropTypes.bool,
};

export default Label;
