import React from "react";
import { Link } from "react-router-dom";
import "../css/landingPage.css";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Interactive Web Design Assignment</h1>
            <div className="button-container">
                <Link to="/components">
                    <button>COMPONENTS</button>
                </Link>
                <Link to="/events">
                    <button>EVENTS</button>
                </Link>
                <Link to="/forms">
                    <button>FORMS</button>
                </Link>
                <Link to="/routing">
                    <button>ROUTES</button>
                </Link>
                <Link to="/registrations">
                    <button>REGISTRATIONS</button>
                </Link>
                <Link to="/memos">
                    <button>REACT MEMO</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
