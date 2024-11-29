import React from "react";

const List = () => {
    const activities = ["Reading", "Cycling", "Gaming", "Cooking", "Traveling"];

    return (
        <div>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                ))}
            </ul>
        </div>
    )
}

export default List;