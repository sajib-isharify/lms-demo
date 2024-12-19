import React, { useState } from "react";
import Label from "./Label";
import InputText from "./InputText";
import InputEmail from "./InputEmail";

const Form = ({ fields }) => {
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.label.toLowerCase().replace(" ", "_")] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field, index) => (
        <div key={index}>
          <Label text={field.label} htmlFor={field.label.toLowerCase().replace(" ", "_")} isRequired />
          {field.type === "email" ? (
            <InputEmail
              id={field.label.toLowerCase().replace(" ", "_")}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              value={formData[field.label.toLowerCase().replace(" ", "_")]}
              onChange={handleChange}
              required={true}
              error={errors[field.label.toLowerCase().replace(" ", "_")]}
            />
          ) : (
            <InputText
              id={field.label.toLowerCase().replace(" ", "_")}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              value={formData[field.label.toLowerCase().replace(" ", "_")]}
              onChange={handleChange}
              required={true}
              error={errors[field.label.toLowerCase().replace(" ", "_")]}
            />
          )}
        </div>
      ))}

      <button type="submit" className="w-full py-2 bg-green-500 text-white rounded focus:outline-none hover:bg-green-600">
        Submit
      </button>
    </form>
  );
};

export default Form;
