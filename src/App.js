import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import LoginForm from "./components/formhandl/loginf";
import SingleInputForm from "./components/formhandl/singleform";
import ValidationForm from "./components/formhandl/valiform";
import MultiStepForm from "./components/formhandl/multistepform";
import CheckboxForm from "./components/formhandl/checkboxform";


import Navbar from "./components/routing/Navbar";
import Home  from "./components/routing/pages/Home";
import About from "./components/routing/pages/About";
import Contact from "./components/routing/pages/Contact";
import NotFound from "./components/routing/pages/NotFound";
import ProductDetails from "./components/routing/pages/ProductionDetails";
import Blog from "./components/routing/pages/Blog";
import Post from "./components/routing/pages/Post";


import Parent from "./components/memo/Parent";
import CounterWithList from "./components/memo/counterwithlist";
import TodoApp from "./components/memo/todoapp";
import LiveTimeApp from "./components/memo/livetime";
import HeavyCalculation from "./components/memo/heavycalculations";

import LecturerRegistration from "./components/registartion/forms/lectures";
import StudentRegistration from "./components/registartion/forms/studenr";
import DriverRegistration from "./components/registartion/forms/drivers";
import BookRegistration from "./components/registartion/forms/books";
import ModuleRegistration from "./components/registartion/forms/module";


const App = () => {

  const [num, setNum] = useState(1);
  const [otherState, setOtherState] = useState(false);

  return (
    <>
    <Router>
      <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />}>
          <Route path="post/:postId" element={<Post />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        
        <Route path="/lecturer-registration" element={<LecturerRegistration />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/driver-registration" element={<DriverRegistration />} />
        <Route path="/book-registration" element={<BookRegistration />} />
          <Route path="/module-registration" element={<ModuleRegistration />} />
          </Routes>
      </Router>
    <div style={{ textAlign: "center", marginTop: "20px" }}>
  
      <LoginForm />
      <SingleInputForm />
      <ValidationForm />
      <MultiStepForm />
        <CheckboxForm />
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
      </>
  );
};

export default App;
