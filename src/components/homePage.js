import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="header">
      <div className="quote">
        <span className="primary-quote">
          We see our happiness on your smile
        </span>
        <span className="quote-author mb-5" role="img" aria-label=":steamHappy">
          - Sagar Ghimire 😁
        </span>
        <Link to="/jokes">
          <button className="btn btn-warning mt-5 ml-5">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
