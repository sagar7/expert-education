import React from "react";
import PropTypes from "prop-types";

const ListGroup = ({
  categories,
  name,
  onItemSelect,
  selectedItem,
  length
}) => {
  return (
    <div className="container">
      <h2 className="topic ">{name}</h2>
      <ul className="list-group " style={{ cursor: "pointer" }}>
        {categories.map(category => {
          return (
            <li
              className={
                selectedItem === category
                  ? "list-group-item active d-flex justify-content-between align-items-center"
                  : "list-group-item d-flex justify-content-between align-items-center"
              }
              key={category}
              onClick={() => onItemSelect(category)}
            >
              {category}
              {selectedItem === category ? (
                <span className="badge badge-primary badge-pill">
                  {length ? length : ""}
                </span>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
ListGroup.prototype = {
  name: PropTypes.string,
  categories: PropTypes.array,
  selectedItem: PropTypes.string,
  onItemSelect: PropTypes.func,
  length: PropTypes.number
};

export default ListGroup;
