import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  //eslint-disable-next-line
  return (
    <div className="header">
      <div className="quote">
        <span className="primary-quote">
          We see our happiness on your smile
        </span>

        <span className="quote-author" role="img">
          - Sagar Ghimire{" "}
          <span role="img" aria-label=":steamHappy">
            😁
          </span>
        </span>
        <Link to="/random-jokes" className="btn btn-white">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
