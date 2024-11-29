import React, { useMemo } from "react";

const HeavyCalculation = React.memo(({ num }) => {
  const calculate = (n) => {
    console.log("Heavy calculation running...");
    return n * 1000;
  };

  const result = useMemo(() => calculate(num), [num]);

  return <p>Calculated Result: {result}</p>;
});

export default HeavyCalculation;

