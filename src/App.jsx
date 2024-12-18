import React, { useState } from "react";
import Label from "./components/forms/Label";
import InputPassword from "./components/forms/InputPassword";
import InputText from "./components/forms/InputText";
import ErrorMessage from "./components/forms/ErrorMessage";
import InputEmail from "./components/forms/InputEmail";
import InputDate from "./components/forms/InputDate";
import Checkbox from "./components/forms/Checkbox";
function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const errors = {
    fullName: ["Your name is required."],
    email: ["Please provide a valid email address."],
    password: ["Password must be at least 8 characters."],
    confirmPassword: ["Passwords do not match."],
    terms: ["You must accept the terms and conditions."],
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="max-w-md mx-auto p-8 bg-gray-900 rounded shadow-lg">
        <h2 className="text-white text-2xl font-bold mb-4">Sign Up</h2>

        {/* Full Name */}
        <div className="mb-4">
          <Label text="Full Name" htmlFor="fullName" isRequired />
          <InputText id="fullName" placeholder="Type full name" value={formData.fullName} onChange={handleChange} required prefix="$" />
        </div>
        <div className="mb-4">
          <Label text="Full number" htmlFor="number" isRequired />
          <InputText id="number" placeholder="Type full name" value={formData.number} onChange={handleChange} required prefix="#" />
        </div>

        {/* Email */}
        <div className="mb-4">
          <Label text="Email" htmlFor="email" isRequired />
          <InputEmail id="email" placeholder="e.g. olivia@email.com" value={formData.email} onChange={handleChange} required error={errors?.password} />
          <ErrorMessage message={errors?.email} />
        </div>

        {/* Password */}
        <div className="mb-4">
          <Label text="Password" htmlFor="password" isRequired />
          <InputPassword id="password" placeholder="Type password" value={formData.password} onChange={handleChange} error={errors?.password} />
          <ErrorMessage message={errors?.password} />
        </div>

        {/* Date */}
        <div className="mb-4">
          <Label text="Date" htmlFor="date" isRequired />
          <InputDate id="date" placeholder="Type date" value={formData.date} onChange={handleChange} error={errors?.date} />
          <ErrorMessage message={errors?.date} />
        </div>

        {/* Retype Password */}
        <div className="mb-6">
          <Label text="Retype Password" htmlFor="confirmPassword" isRequired />
          <InputPassword
            id="confirmPassword"
            placeholder="Retype password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            error={errors?.confirmPassword}
          />
        </div>
        <div className="mb-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" error={errors?.terms} />
            <Label htmlFor="terms" text="Accept terms and conditions" />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default App;
