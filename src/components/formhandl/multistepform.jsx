import React, { useState } from "react";

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
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {step === 1 && (
        <div>
          <h2>Step 1: Name</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Address</h2>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
          <button onClick={handlePrev}>Back</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Payment Information</h2>
          <input
            type="text"
            name="payment"
            placeholder="Payment Info"
            value={formData.payment}
            onChange={handleChange}
          />
          <button onClick={handlePrev}>Back</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
