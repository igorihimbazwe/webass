import React, { useState } from "react";
import "./forms.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    setFormData({ username: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-field">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-field">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <button type="submit" className="submit-btn">Login</button>
    </form>
  );
};

const SingleInputForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered Value:", value);

  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <p>Entered Value: {value}</p>
    </div>
  );
};

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

    
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-field">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <p className="error-text">{errors.email}</p>
      </div>
      <div className="form-field">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <p className="error-text">{errors.password}</p>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", address: "", payment: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Form Data:", formData);

  
    setFormData({ name: "", address: "", payment: "" });
    setStep(1);
  };

  return (
    <div className="form-container">
      {step === 1 && (
        <div className="step">
          <h2>Step 1: Name</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
          <button onClick={handleNext} className="btn">Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="step">
          <h2>Step 2: Address</h2>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="input-field"
          />
          <button onClick={handlePrev} className="btn">Back</button>
          <button onClick={handleNext} className="btn">Next</button>
        </div>
      )}
      {step === 3 && (
        <div className="step">
          <h2>Step 3: Payment Information</h2>
          <input
            type="text"
            name="payment"
            placeholder="Payment Info"
            value={formData.payment}
            onChange={handleChange}
            className="input-field"
          />
          <button onClick={handlePrev} className="btn">Back</button>
          <button onClick={handleSubmit} className="btn">Submit</button>
        </div>
      )}
    </div>
  );
};

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Options:", selectedOptions);
  };

  return (
    <div className="form-container">
      <h2>Select Your Options</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {["Option 1", "Option 2", "Option 3"].map((option) => (
            <label key={option} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <p>Selected Options: {selectedOptions.join(", ") || "None"}</p>
    </div>
  );
};

export { LoginForm, SingleInputForm, ValidationForm, MultiStepForm, CheckboxForm };
