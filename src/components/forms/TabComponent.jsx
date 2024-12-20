import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import Checkbox from "./Checkbox";
import InputDate from "./InputDate";
import Label from "./Label";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
    date: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted", formData);
    }
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.fullName) newErrors.fullName = "Full name is required";
    if (!data.number) newErrors.number = "Number is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";
    if (data.password !== data.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!data.date) newErrors.date = "Date is required";
    if (!data.terms) newErrors.terms = "You must accept the terms";

    return newErrors;
  };

  useEffect(() => {
    const initialData = {
      fullName: "",
      number: "",
      email: "",
      password: "",
      confirmPassword: "",
      date: "",
      terms: false,
    };
    setFormData(initialData);
  }, [activeTab]);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Tabs */}
      <div className="relative flex border-b border-gray-700 mb-6">
        <button
          onClick={() => handleTabClick(1)}
          className={`relative px-4 py-2 text-sm font-semibold focus:outline-none
            ${activeTab === 1 ? "text-green-500" : "text-gray-500 hover:text-green-500"}`}
        >
          Tab 1
          <span
            className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300
              ${activeTab === 1 ? "w-full bg-green-500 shadow-md shadow-green-500" : "w-0 bg-transparent"}`}
          />
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`relative px-4 py-2 text-sm font-semibold focus:outline-none
            ${activeTab === 2 ? "text-green-500" : "text-gray-500 hover:text-green-500"}`}
        >
          Tab 2
          <span
            className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300
              ${activeTab === 2 ? "w-full bg-green-500 shadow-md shadow-green-500" : "w-0 bg-transparent"}`}
          />
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`relative px-4 py-2 text-sm font-semibold focus:outline-none
            ${activeTab === 3 ? "text-green-500" : "text-gray-500 hover:text-green-500"}`}
        >
          Tab 3
          <span
            className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300
              ${activeTab === 3 ? "w-full bg-green-500 shadow-md shadow-green-500" : "w-0 bg-transparent"}`}
          />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {activeTab === 1 && (
          <>
            <div className="mb-4">
              <Label text="Full Name" htmlFor="fullName" isRequired />
              <InputText id="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={handleChange} required error={errors.fullName} />
            </div>
            <div className="mb-4">
              <Label text="Number" htmlFor="number" isRequired />
              <InputText id="number" placeholder="Enter Number" value={formData.number} onChange={handleChange} required error={errors.number} />
            </div>
          </>
        )}

        {activeTab === 2 && (
          <>
            <div className="mb-4">
              <Label text="Email" htmlFor="email" isRequired />
              <InputText id="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required error={errors.email} />
            </div>
            <div className="mb-4">
              <Label text="Password" htmlFor="password" isRequired />
              <InputText
                id="password"
                placeholder="Enter Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                error={errors.password}
              />
            </div>
            <div className="mb-4">
              <Label text="Retype Password" htmlFor="confirmPassword" isRequired />
              <InputText
                id="confirmPassword"
                placeholder="Retype Password"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                error={errors.confirmPassword}
              />
            </div>
          </>
        )}

        {activeTab === 3 && (
          <>
            <div className="mb-4">
              <Label text="Date" htmlFor="date" isRequired />
              <InputDate id="date" value={formData.date} onChange={handleChange} required error={errors.date} />
            </div>
            <div className="mb-4">
              <Label text="Accept Terms and Conditions" htmlFor="terms" isRequired />
              <Checkbox id="terms" checked={formData.terms} onChange={handleChange} error={errors.terms} />
            </div>
          </>
        )}

        <button type="submit" className="w-full py-2 bg-green-500 text-white rounded focus:outline-none hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TabComponent;
