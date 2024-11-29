import React, { useState } from "react";

const HoverBox = () => {
  const [bgColor, setBgColor] = useState("#f0f0f0");

  const handleMouseEnter = () => setBgColor("#007BFF");
  const handleMouseLeave = () => setBgColor("#f0f0f0");

  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: bgColor,
        margin: "20px auto",
        textAlign: "center",
        lineHeight: "200px",
        color: "#fff",
        borderRadius: "10px",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover Over Me
    </div>
  );
};

export default HoverBox;
