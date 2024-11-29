import React, { useState } from "react";
import TodoList from "./todolist";

const TodoApp = () => {
  const [todos, setTodos] = useState(["Learn React", "Build a Project"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
