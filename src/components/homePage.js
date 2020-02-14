import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  //eslint-disable-next-line
  // handleLike = movie => {
  //   const movies = [...this.state.movies];
  //   const index = movies.indexOf(movie);
  //   movies[index] = { ...movies[index] };
  //   movies[index].liked = !movies[index].liked;
  //   this.setState({ movies });
  // }
  return (
    <div className="header">
      <div className="quote">
        <span className="primary-quote">
          We see our happiness on your smile
        </span>

        <span className="quote-author" role="img" aria-label=":steamHappy">
          - Sagar Ghimire 😁
        </span>
        <Link to="/jokes" className="btn btn-white">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
