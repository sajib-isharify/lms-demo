import React, { useEffect } from "react";
import PropTypes from "prop-types";

const InputText = React.forwardRef(({ id, placeholder, value, onChange, required, error, prefix, name, register, rules = {}, setValue, getValues }, ref) => {
  const isReactHookForm = typeof register === "function";

  useEffect(() => {
    if (isReactHookForm && getValues && setValue) {
      const currentValue = getValues(name);
      if (currentValue && currentValue !== value) {
        setValue(name, value);
      }
    }
  }, [value, name, setValue, getValues, isReactHookForm]);

  return (
    <div className="relative w-full">
      {prefix && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-bold">{prefix}</div>}
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...(isReactHookForm ? register(name, rules) : {})}
        ref={ref}
        className={`w-full px-4 py-1 ${prefix ? "pl-8" : "pl-4"} text-white bg-gray-800 border rounded focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-700 focus:ring-green-500"}`}
      />
    </div>
  );
});

InputText.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  prefix: PropTypes.node,
  name: PropTypes.string,
  register: PropTypes.func,
  rules: PropTypes.object,
  setValue: PropTypes.func,
  getValues: PropTypes.func,
};

export default InputText;