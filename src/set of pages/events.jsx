import React from "react";
import ToggleButton from "../components/events/on an off";
import Counter from "../components/events/counter";
import HoverBox from "../components/events/bgcolorhover";
import InputForm from "../components/events/consoleinputs";
import DropdownMenu from "../components/events/dropdownmenu";

const Events = () => {
    return (
        <>
        <ToggleButton />
      <Counter />
      <HoverBox />
      <InputForm />
            <DropdownMenu />
            </>
    )
}
export default Events;