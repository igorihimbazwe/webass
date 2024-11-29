import React from "react";

const CurrentDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return <p>Today's Date: {formattedDate}</p>;
};

export default CurrentDate
