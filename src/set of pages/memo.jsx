import React,  { useState } from "react";

import { Parent,CounterWithList,TodoApp,LiveTimeApp,HeavyCalculation } from "../components/memo/memo4";



const Memos=()=>{
    const [num, setNum] = useState(1);
    const [otherState, setOtherState] = useState(false);

    return(
        <div style={{ textAlign: "center", marginTop: "20px" }}>

        <Parent />
         <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Heavy Calculation Component</h1>
      <button onClick={() => setNum(num + 1)} style={{ margin: "10px", padding: "10px" }}>
        Increment Num: {num}
      </button>
      <button onClick={() => setOtherState(!otherState)} style={{ margin: "10px", padding: "10px" }}>
        Toggle State
      </button>
      <HeavyCalculation num={num} />
    </div>
        <CounterWithList />
        <TodoApp />
        
        <LiveTimeApp/>
        
      
      
      </div>
    )
}

export default Memos;