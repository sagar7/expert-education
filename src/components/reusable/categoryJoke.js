import React from "react";
import PropTypes from "prop-types";
const CategoryJoke = ({ categoryData }) => {
  return (
    <>
      {categoryData && categoryData.length
        ? categoryData.map((data, indx) => {
            return (
              <div
                className="card border-primary mb-3 mt-2"
                style={{ maxWidth: "40rem" }}
                key={data.id}
              >
                <div className="card-header">{indx + 1}</div>
                <div className="card-body text-black">
                  <h5 className="card-title">Created At: {data.created_at}</h5>
                  <p className="card-text font-italic">{data.value}</p>
                </div>
              </div>
            );
          })
        : <h1>No data of this category</h1>}
    </>
  );
};
CategoryJoke.prototype = {
  categoryData: PropTypes.array
};

export default CategoryJoke;
