import React from "react";
import HobbyList from "./hobbyList";

const Hobbiesp = () => {
    const hobbies = ["swim", "drink", "singing", "driving"];
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>My Hobbies</h2>
            <HobbyList hobbies={hobbies}/>
         </div>
     )
}
export default Hobbiesp