import React, { useState } from "react";
import "../regi.css"

const BookRegistration = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    publishedYear: "",
  });

  const [errors, setErrors] = useState({
    publishedYear: "",
  });

  const validatePublishedYear = (year) => {
    const regex = /^[0-9]{4}$/;
    return regex.test(year);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "publishedYear" && !validatePublishedYear(value)) {
      setErrors({ ...errors, publishedYear: "Published year must be a four-digit number." });
    } else if (name === "publishedYear") {
      setErrors({ ...errors, publishedYear: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.publishedYear) {
      console.log("Book Registration Data", formData);
      setFormData({
        title: "",
        author: "",
        isbn: "",
        publishedYear: "",
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Book Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label>Author:</label>
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        required
      />

      <label>ISBN:</label>
      <input
        type="text"
        name="isbn"
        value={formData.isbn}
        onChange={handleChange}
        required
      />

      <label>Published Year:</label>
      <input
        type="text"
        name="publishedYear"
        value={formData.publishedYear}
        onChange={handleChange}
        required
      />
      {errors.publishedYear && <p style={{ color: "red" }}>{errors.publishedYear}</p>}

      <button type="submit">Register Book</button>
    </form>
  );
};

export default BookRegistration;
