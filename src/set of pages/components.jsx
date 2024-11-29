import React from "react";
import WelcomeMessage from "../components/components/welcom";
import CurrentDate from "../components/memo/todayDate";
import Hobbiesp from "../components/components/hobbies";
import Button from "../components/components/button";
import ProfileCard from "../components/components/profileCard";
import List from "../components/components/displayList";


const Componets = () => {
    return (
        <>
        <WelcomeMessage />
      <CurrentDate />
      <Hobbiesp />
      <Button text={"click me"} color={"green"} />
      <ProfileCard name={"Igor"} age={21} email={"igor@gmail.com"} />
            <List />
            </>
    )
}

export default Componets;