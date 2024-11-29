import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={toggleMenu} style={{ padding: "10px 20px" }}>
        {isOpen ? "Hide Options" : "Show Options"}
      </button>
      {isOpen && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            marginTop: "10px",
            background: "#f0f0f0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "200px",
            margin: "10px auto",
            textAlign: "left",
          }}
        >
          <li style={{ padding: "10px" }}>Option 1</li>
          <li style={{ padding: "10px" }}>Option 2</li>
          <li style={{ padding: "10px" }}>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
