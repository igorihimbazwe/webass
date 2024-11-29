import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const data = "Prop passed to child";

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <Child data={data} />
    </div>
  );
};

export default Parent;
