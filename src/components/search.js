import React, { Component } from "react";
import Joi from "@hapi/joi";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { freeTextSearch } from "../services/jokeServices";
import {
  setSearchedJoke,
  setSelectedCategory
} from "../redux/jokes/jokeAction";
class Search extends Component {
  state = {
    search: "",
    error: ""
  };
  search = Joi.string()
    .min(3)
    .max(20)
    .required()
    .label("Character");

  handleSubmit = async e => {
    try {
      e.preventDefault();
      const { error } = await this.search.validate(this.state.search);
      this.setState({ error: error ? error.details[0].message : "" });
      if (error) return;

      const { data } = await freeTextSearch(this.state.search);
      const { setSearchedJoke, setSelectedCategory } = this.props;
      setSearchedJoke(data.result);
      setSelectedCategory("");
    } catch (ex) {
      toast.error("Some error occur!");
    }
  };

  handleChange = ({ target: input }) => {
    const value = input.value;
    this.setState({ search: value });
  };
  render() {
    const { error } = this.state;

    return (
      <div className="row">
        <div className="active-purple-3 active-purple-4 mb-4 col">
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              name="search"
              placeholder="Search"
              onChange={this.handleChange}
              aria-label="Search"
            />
            {error && <div className="text-danger">{error}</div>}
            <button type="submit" className="btn btn-primary ">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setSearchedJoke: joke => dispatch(setSearchedJoke(joke)),
  setSelectedCategory: category => dispatch(setSelectedCategory(category))
});
export default connect(null, mapDispatchToProps)(Search);
