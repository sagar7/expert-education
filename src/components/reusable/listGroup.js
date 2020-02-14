import React from "react";

const ListGroup = ({ categories, name, onItemSelect, selectedItem }) => {
  return (
    <div className="container mt-3 ml-5">
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
              <span className="badge badge-primary badge-pill">14</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListGroup;
