import React from "react";
import PropTypes from "prop-types";

const CategoryJoke = ({ id, created_at, value }) => {
  return (
    <div
      className="card border-primary mb-3 mt-2"
      style={{ maxWidth: "40rem" }}
      key={id}
    >
      <div className="card-body text-black">
        <h5 className="card-title">Created At: {created_at}</h5>
        <p className="card-text font-italic">{value}</p>
      </div>
    </div>
  );
};
CategoryJoke.prototype = {
  id: PropTypes.string,
  created_at: PropTypes.instanceOf(Date),
  value: PropTypes.string
};

export default CategoryJoke;
