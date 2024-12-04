import React from "react";

import { LoginForm,SingleInputForm,ValidationForm,MultiStepForm,CheckboxForm } from "../components/formhandl/forms3";


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