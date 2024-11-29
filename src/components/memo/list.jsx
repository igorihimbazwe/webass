import React from "react";

const List = React.memo(({ items }) => {
  console.log("List rendered");
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
});

export default List;
