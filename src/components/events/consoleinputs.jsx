import React, { useState } from "react";

const InputForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", input);
    setInput(""); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
