import React, { useState } from "react";
import "../regi.css"

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    dob: "",
  });

  const [errors, setErrors] = useState({
    studentId: "",
  });

  const validateStudentId = (id) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "studentId" && !validateStudentId(value)) {
      setErrors({ ...errors, studentId: "Student ID must be alphanumeric." });
    } else if (name === "studentId") {
      setErrors({ ...errors, studentId: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.studentId) {
      console.log("Student Registration Data", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        studentId: "",
        dob: "",
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
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

      <label>Student ID:</label>
      <input
        type="text"
        name="studentId"
        value={formData.studentId}
        onChange={handleChange}
        required
      />
      {errors.studentId && <p style={{ color: "red" }}>{errors.studentId}</p>}

      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        required
      />

      <button type="submit">Register Student</button>
    </form>
  );
};

export default StudentRegistration;
