import React, { useState } from "react";

const DriverRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    licenseNumber: "",
    phone: "",
    vehicleType: "car",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Driver Registration Data", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>License Number:</label>
      <input
        type="text"
        name="licenseNumber"
        value={formData.licenseNumber}
        onChange={handleChange}
        required
      />

      <label>Phone Number:</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label>Vehicle Type:</label>
      <select
        name="vehicleType"
        value={formData.vehicleType}
        onChange={handleChange}
      >
        <option value="car">Car</option>
        <option value="truck">Truck</option>
        <option value="motorcycle">Motorcycle</option>
      </select>

      <button type="submit">Register Driver</button>
    </form>
  );
};

export default DriverRegistration;
