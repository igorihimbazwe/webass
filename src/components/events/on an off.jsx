import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  const buttonStyle = {
    backgroundColor: isOn ? "#28a745" : "#dc3545", 
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <button style={buttonStyle} onClick={handleToggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
