import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setSelectedCategory,
  setSelectedCategoryData
} from "../redux/jokes/jokeAction";
import { categoryData } from "../services/jokeServices";
const ListGroup = ({
  categories,
  setSelectedCategory,
  selectedCategory,
  setSelectedCategoryData
}) => {
  const triggerChange = useCallback(() => {
    return categoryData(selectedCategory);
  }, [selectedCategory]);
  useEffect(() => {
    async function apiCall() {
      if (selectedCategory) {
        const { data } = await triggerChange();
        setSelectedCategoryData(data);
      }
    }
    apiCall();
  }, [selectedCategory, triggerChange, setSelectedCategoryData]);
  return (
    <div className="container">
      <h2 className="topic ">Select Category</h2>
      <ul className="list-group " style={{ cursor: "pointer" }}>
        {categories.map(category => {
          return (
            <li
              className={
                selectedCategory === category
                  ? "list-group-item active d-flex justify-content-between align-items-center"
                  : "list-group-item d-flex justify-content-between align-items-center"
              }
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
ListGroup.prototype = {
  categories: PropTypes.array,
  setSelectedCategory: PropTypes.func,
  selectedCategory: PropTypes.string
};

const mapStateToPros = ({ Joke: { categories, selectedCategory } }) => ({
  categories,
  selectedCategory
});
const mapDispatchToPops = dispatch => ({
  setSelectedCategory: category => dispatch(setSelectedCategory(category)),
  setSelectedCategoryData: data => dispatch(setSelectedCategoryData(data))
});

export default connect(mapStateToPros, mapDispatchToPops)(ListGroup);
