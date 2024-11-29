import React, { useState } from "react";

const ValidationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Form Submitted:", { email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ margin: "5px" }}
        />
        <p style={{ color: "red" }}>{errors.email}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "5px" }}
        />
        <p style={{ color: "red" }}>{errors.password}</p>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ValidationForm;
