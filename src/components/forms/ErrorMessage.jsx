import React from "react";
import PropTypes from "prop-types";
import { TbAlertTriangleFilled } from "react-icons/tb";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  const errorMessage = Array.isArray(message) ? message.join(", ") : message;

  return (
    <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
      <span>
        <TbAlertTriangleFilled />{" "}
      </span>
      <p>{errorMessage}</p>
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default ErrorMessage;
