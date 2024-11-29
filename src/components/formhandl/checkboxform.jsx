import React, { useState } from "react";

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Select Your Options</h2>
      <div>
        {["Option 1", "Option 2", "Option 3"].map((option) => (
          <label key={option} style={{ display: "block", margin: "5px" }}>
            <input
              type="checkbox"
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <p>Selected Options: {selectedOptions.join(", ") || "None"}</p>
    </div>
  );
};

export default CheckboxForm;
