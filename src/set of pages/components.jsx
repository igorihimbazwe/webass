import React from "react";
import { WelcomeMessage,CurrentDate,Hobbiesp,Button,ProfileCard,List } from "../components/components/components1";


const Componets = () => {
    return (
        <>
        <WelcomeMessage />
      <CurrentDate />
      <Hobbiesp />
      <Button text={"click me"} color={"red"} />
      <ProfileCard name={"Igor"} age={21} email={"igor@gmail.com"} />
            <List />
            </>
    )
}

export default Componets;