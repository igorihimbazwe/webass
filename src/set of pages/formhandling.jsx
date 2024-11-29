import React from "react";
import LoginForm from "../components/formhandl/loginf";
import SingleInputForm from "../components/formhandl/singleform";
import ValidationForm from "../components/formhandl/valiform";
import MultiStepForm from "../components/formhandl/multistepform";
import CheckboxForm from "../components/formhandl/checkboxform";


const FormHandle = () => {
    return (
        <>
          <LoginForm />
      <SingleInputForm />
      <ValidationForm />
      <MultiStepForm />
        <CheckboxForm />  
        </>
    )
}

export default FormHandle;