import React from "react";

const Button = ({ text, color }) => {
    
  const buttonStyle = {
    backgroundColor: color || "blue", 
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };
    
    
    

  return (
    <button style={buttonStyle} >
      {text}
    </button>
  );
};

export default Button;
