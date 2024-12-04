import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landingPage";


import  Componets  from "./set of pages/components";
import Events from "./set of pages/events"
import Memos from "./set of pages/memo";
import FormHandle from "./set of pages/formhandling";
import Registrationn from "./set of pages/registration";
import Routing from "./set of pages/routing";

import Home from "./components/routing/pages/Home";
import About from "./components/routing/pages/About";
import Contact from "./components/routing/pages/Contact";
import ProductDetails from "./components/routing/pages/ProductionDetails";
import Blog from "./components/routing/pages/Blog";
import Post from "./components/routing/pages/Post";
import NotFound from "./components/routing/pages/NotFound";

import LecturerRegistration from "./components/registartion/forms/lectures";
import StudentRegistration from "./components/registartion/forms/studenr";
import DriverRegistration from "./components/registartion/forms/drivers";
import BookRegistration from "./components/registartion/forms/books";
import ModuleRegistration from "./components/registartion/forms/module";



const App = () => {

  return (
    
    
    <Router>
    
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      <Route path="/components" element={<Componets />} />
        <Route path="/events" element={<Events />} />
        <Route path="/memos" element={<Memos />} />
        <Route path="/forms" element={<FormHandle />} />
        <Route path="/routing" element={<Routing />} />
          <Route path="/registrations" element={<Registrationn />} />

          <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
          <Route path="post/:postId" element={<Post />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/lecturer-registration" element={<LecturerRegistration />} />
        <Route path="/student-registration" element={<StudentRegistration />} />
        <Route path="/driver-registration" element={<DriverRegistration />} />
        <Route path="/book-registration" element={<BookRegistration />} />
          <Route path="/module-registration" element={<ModuleRegistration />} />
      </Routes>
    </Router>

  
  );
};

export default App;
