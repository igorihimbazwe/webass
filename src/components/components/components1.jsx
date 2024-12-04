import React from "react";
import "./components.css";

const WelcomeMessage = () => {
  return <h1 className="title">Welcome to Our React App!</h1>;
};

const CurrentDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return <p className="current-date">Today's Date: {formattedDate}</p>;
};

const HobbyList = ({ hobbies }) => {
  return (
    <ul className="hobby-list">
      {hobbies.map((hobby, index) => (
        <li key={index} className="hobby-item">
          {hobby}
        </li>
      ))}
    </ul>
  );
};

const Hobbiesp = () => {
  const hobbies = ["swim", "drink", "singing", "driving"];
  return (
    <div className="hobbies">
      <h2 className="subtitle">My Hobbies</h2>
      <HobbyList hobbies={hobbies} />
    </div>
  );
};

const Button = ({ text, color }) => {
  return <button className="button" style={{ backgroundColor: color }}>{text}</button>;
};

const List = () => {
  const activities = ["Reading", "Cycling", "Gaming", "Cooking", "Traveling"];
  return (
    <ul className="activity-list">
      {activities.map((activity, index) => (
        <li key={index} className="activity-item">
          {activity}
        </li>
      ))}
    </ul>
  );
};

const ProfileCard = ({ name, age, email }) => {
  return (
    <div className="profile-card">
      <div className="profile-name">{name}</div>
      <div className="profile-detail">Age: {age}</div>
      <div className="profile-detail">Email: {email}</div>
    </div>
  );
};

export { WelcomeMessage, CurrentDate, HobbyList, Hobbiesp, Button, List, ProfileCard };
