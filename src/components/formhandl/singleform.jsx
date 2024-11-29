import React, { useState } from "react";

const SingleInputForm = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form>
        <input
          type="text"
          placeholder="Enter something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ margin: "5px" }}
        />
      </form>
      <p>Entered Value: {value}</p>
    </div>
  );
};

export default SingleInputForm;
