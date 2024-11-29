import React from "react";

const StaticUI = React.memo(() => {
  console.log("Static UI rendered");
  return <p>This part of the UI does not update with time.</p>;
});

export default StaticUI;
