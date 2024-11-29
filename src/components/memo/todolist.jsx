import React from "react";

const TodoList = React.memo(({ todos }) => {
  console.log("TodoList rendered");
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
});

export default TodoList;
