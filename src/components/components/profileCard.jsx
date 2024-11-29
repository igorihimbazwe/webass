import React from "react";

const ProfileCard = ({ name, age, email }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "300px",
    margin: "20px auto",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const nameStyle = { fontSize: "20px", fontWeight: "bold", marginBottom: "10px" };
  const detailStyle = { fontSize: "16px", marginBottom: "8px", color: "#555" };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={detailStyle}>Age: {age}</div>
      <div style={detailStyle}>Email: {email}</div>
    </div>
  );
};

export default ProfileCard;
