import React from "react";

const HobbyList = ({ hobbies }) => {
  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {hobbies.map((hobby, index) => (
        <li key={index} style={{ margin: "10px 0", fontSize: "18px" }}>
          {hobby}
        </li>
      ))}
    </ul>
  );
};

export default HobbyList;
