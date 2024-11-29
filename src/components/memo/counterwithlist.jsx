import React, { useState } from "react";
import List from "../components/displayList";

const CounterWithList = () => {
  const [count, setCount] = useState(0);
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div>
      <h1>Counter with List</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <List items={items} />
    </div>
  );
};

export default CounterWithList;
