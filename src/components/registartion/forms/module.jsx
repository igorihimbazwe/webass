import React, { useState } from "react";
import "../regi.css"

const ModuleRegistration = () => {
  const [formData, setFormData] = useState({
    moduleName: "",
    moduleCode: "",
    description: "",
    credits: "",
  });

  const [errors, setErrors] = useState({
    credits: "",
  });

  const validateCredits = (credits) => {
    return /^[0-9]+$/.test(credits); // Check if credits is a number
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "credits" && !validateCredits(value)) {
      setErrors({ ...errors, credits: "Credits must be numeric." });
    } else if (name === "credits") {
      setErrors({ ...errors, credits: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.credits) {
      console.log("Module Registration Data", formData);
      setFormData({
        moduleName: "",
        moduleCode: "",
        description: "",
        credits: "",
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Module Name:</label>
      <input
        type="text"
        name="moduleName"
        value={formData.moduleName}
        onChange={handleChange}
        required
      />

      <label>Module Code:</label>
      <input
        type="text"
        name="moduleCode"
        value={formData.moduleCode}
        onChange={handleChange}
        required
      />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Credits:</label>
      <input
        type="text"
        name="credits"
        value={formData.credits}
        onChange={handleChange}
        required
      />
      {errors.credits && <p style={{ color: "red" }}>{errors.credits}</p>}

      <button type="submit">Register Module</button>
    </form>
  );
};

export default ModuleRegistration;
