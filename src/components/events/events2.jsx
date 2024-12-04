import React, { useState } from "react";
import "./events.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <button className={`toggle-button ${isOn ? "on" : "off"}`} onClick={handleToggle}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      <div className="counter-buttons">
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="counter-button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const HoverBox = () => {
  const [bgColor, setBgColor] = useState("#f0f0f0");

  const handleMouseEnter = () => setBgColor("#007BFF");
  const handleMouseLeave = () => setBgColor("#f0f0f0");

  return (
    <div
      className="hover-box"
      style={{ backgroundColor: bgColor }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover Over Me
    </div>
  );
};

const InputForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", input);
    setInput("");
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        className="text-input"
      />
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
};

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="dropdown-menu">
      <button className="dropdown-button" onClick={toggleMenu}>
        {isOpen ? "Hide Options" : "Show Options"}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item">Option 1</li>
          <li className="dropdown-item">Option 2</li>
          <li className="dropdown-item">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export { ToggleButton, Counter, HoverBox, InputForm, DropdownMenu };
