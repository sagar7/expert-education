import React, { Component } from "react";
import { toast } from "react-toastify";
import CategoryJoke from "./reusable/categoryJoke";
import ListGroup from "./reusable/listGroup";
import { categories, categoryData, random } from "../services/jokeServices";

class Jokes extends Component {
  state = {
    categories: [],
    selectedCategory: "",
    categoryData: {},
    randomJoke: {}
  };
  handleCategorySelect = async category => {
    this.setState({ selectedCategory: category });
    const { data } = await categoryData(category);
    this.setState({ categoryData: data });
  };
  async componentDidMount() {
    Promise.all([categories(), random()])
      .then(res => {
        if (res[0].config.url === "/categories")
          this.setState({ categories: res[0].data });
        this.setState({ randomJoke: res[1].data });
      })
      .catch(ex => {
        if (ex.response && ex.response.status === 404)
          toast.error("Cannot get Categories");
      });
  }

  render() {
    const {
      categories,
      selectedCategory,
      categoryData: { result },
      randomJoke
    } = this.state;
    console.log(result)
    return (
      <div className="row">
        <div className="col-4 ml- mt-2">
          <ListGroup
            name="Select category"
            categories={categories}
            onItemSelect={this.handleCategorySelect}
            selectedItem={selectedCategory}
            length={result ? result.length : ""}
          />
        </div>
        <div className="category-joke col-8">
          {selectedCategory.length ? (
            <CategoryJoke categoryData={result} />
          ) : (
            <h2>
              Joke of the day <br />
              <br />
              {randomJoke.value}
            </h2>
          )}
        </div>
      </div>
    );
  }
}

export default Jokes;
