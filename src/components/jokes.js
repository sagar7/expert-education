import React, { Component } from "react";
import ListGroup from "./reusable/listGroup";
import { categories } from "../services/jokeServices";
import { toast } from "react-toastify";
class Jokes extends Component {
  state = {
    categories: [],
    selectedCategory: ""
  };
  handleCategorySelect = async category => {
    this.setState({ selectedCategory: category });
  };
  async componentDidMount() {
    try {
      const { data } = await categories();
      this.setState({ categories: data });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("Cannot get Categories");
    }
  }
  render() {
    const { categories, selectedCategory } = this.state;
    console.log(selectedCategory)
    return (
      <div className="row">
        <div className="col-4 ml-5 mt-5">
          <ListGroup
            name="Categories"
            categories={categories}
            onItemSelect={this.handleCategorySelect}
            selectedItem={selectedCategory}
          />
        </div>
      </div>
    );
  }
}

export default Jokes;
