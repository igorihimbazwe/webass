import React, { useState } from "react";
import "../regi.css"


const LecturerRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email" && !validateEmail(value)) {
      setErrors({ ...errors, email: "Please enter a valid email address." });
    } else if (name === "email") {
      setErrors({ ...errors, email: "" });
    }

    if (name === "phone" && !validatePhone(value)) {
      setErrors({ ...errors, phone: "Phone number must be numeric and 10 digits long." });
    } else if (name === "phone") {
      setErrors({ ...errors, phone: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email && !errors.phone) {
      console.log("Lecturer Registration Data", formData);
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
      })
    }
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

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <label>Subject:</label>
      <input
        type="text"
        name="subject"
        value={formData.subject}
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
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

      <button type="submit">Register Lecturer</button>
    </form>
  );
};

export default LecturerRegistration;
