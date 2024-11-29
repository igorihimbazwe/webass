import React from "react";

const Child = React.memo(({ data }) => {
  console.log("Child rendered");
  return <p>Child Component: {data}</p>;
});

export default Child;
