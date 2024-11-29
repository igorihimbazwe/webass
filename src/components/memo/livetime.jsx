import React, { useState, useEffect } from "react";
import StaticUI from "./staticUI";

const LiveTimeApp = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Live Time App</h1>
      <StaticUI />
      <p>Current Time: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default LiveTimeApp;
