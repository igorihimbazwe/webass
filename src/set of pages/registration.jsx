import React from "react";
import { Link } from "react-router-dom";

const Registrationn = () => {
  return (
    <div>
      <h1>Forms</h1>
      <div>
        <Link to="/lecturer-registration">
          <button>Lecturer Registration</button>
        </Link>
      </div>
      <div>
        <Link to="/student-registration">
          <button>Student Registration</button>
        </Link>
      </div>
      <div>
        <Link to="/driver-registration">
          <button>Driver Registration</button>
        </Link>
      </div>
      <div>
        <Link to="/book-registration">
          <button>Book Registration</button>
        </Link>
      </div>
      <div>
        <Link to="/module-registration">
          <button>Module Registration</button>
        </Link>
      </div>
    </div>
  );
};

export default Registrationn;
