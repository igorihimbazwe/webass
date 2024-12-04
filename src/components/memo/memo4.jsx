import React, { useState, useEffect, useMemo } from "react";
import "./memo.css";

const Parent = () => {
  const [count, setCount] = useState(0);
  const data = "Prop passed to child";

  return (
    <div className="parent-container">
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <Child data={data} />
    </div>
  );
};

const Child = React.memo(({ data }) => {
  console.log("Child rendered");
  return <p className="child-component">Child Component: {data}</p>;
});

const CounterWithList = () => {
  const [count, setCount] = useState(0);
  const items = ["Item 1", "Item 2", "Item 3"];

  return (
    <div className="counter-container">
      <h1>Counter with List</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
      <List items={items} />
    </div>
  );
};

const List = React.memo(({ items }) => {
  console.log("List rendered");
  return (
    <ul className="list-container">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item}
        </li>
      ))}
    </ul>
  );
});

const HeavyCalculation = React.memo(({ num }) => {
  const calculate = (n) => {
    console.log("Heavy calculation running...");
    return n * 1000;
  };

  const result = useMemo(() => calculate(num), [num]);

  return <p className="heavy-result">Calculated Result: {result}</p>;
});

const TodoApp = () => {
  const [todos, setTodos] = useState(["Learn React", "Build a Project"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
      />
      <button onClick={addTodo} className="todo-button">
        Add Todo
      </button>
      <TodoList todos={todos} />
    </div>
  );
};

const TodoList = React.memo(({ todos }) => {
  console.log("TodoList rendered");
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          {todo}
        </li>
      ))}
    </ul>
  );
});

const LiveTimeApp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-container">
      <h1>Live Time App</h1>
      <StaticUI />
      <p className="current-time">{time.toLocaleTimeString()}</p>
    </div>
  );
};

const StaticUI = () => {
  return <div className="static-ui">Static UI Content</div>;
};

export {
  Parent,
  Child,
  CounterWithList,
  List,
  HeavyCalculation,
  TodoApp,
  TodoList,
  LiveTimeApp,
  StaticUI,
};
