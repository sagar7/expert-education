import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import CategoryJoke from "./categoryJoke";
import ListGroup from "./listGroup";
import { categories, random } from "../services/jokeServices";
import { setCategories, setJokeOfTheDay } from "../redux/jokes/jokeAction";
import Search from "./search";
class Jokes extends Component {
  state = {};

  async componentDidMount() {
    Promise.all([categories(), random()])
      .then(res => {
        const { setCategories, setJokeOfTheDay } = this.props;
        if (res[0].config.url === "/categories") {
          setCategories(res[0].data);
          setJokeOfTheDay(res[1].data);
        } else {
          setCategories(res[1].data);
          setJokeOfTheDay(res[0].data);
        }
      })
      .catch(ex => {
        if (ex.response && ex.response.status === 404)
          toast.error("Cannot get data");
      });
  }
  render() {
    const {
      jokeOfTheDay,
      selectedCategory,
      selectedCategoryData: { id, created_at, value },
      searchedJoke
    } = this.props;

    return (
      <div className="row">
        <div className="col-4 ml- mt-2">
          <ListGroup />
        </div>
        <div className="category-joke col-6 mt-5">
          <Search />
          {selectedCategory.length ? (
            <CategoryJoke id={id} created_at={created_at} value={value} />
          ) : (
            <h2>
              Joke of the day <br />
              <br />
              <CategoryJoke
                id={jokeOfTheDay.id}
                created_at={jokeOfTheDay.created_at}
                value={jokeOfTheDay.value}
              />
            </h2>
          )}
          {searchedJoke
            ? searchedJoke.map(data => (
                <CategoryJoke
                  id={data.id}
                  created_at={data.created_at}
                  value={data.value}
                />
              ))
            : ""}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCategories: categories => dispatch(setCategories(categories)),
  setJokeOfTheDay: joke => dispatch(setJokeOfTheDay(joke))
});
const mapStateToProps = ({
  Joke: { jokeOfTheDay, selectedCategory, selectedCategoryData, searchedJoke }
}) => ({
  jokeOfTheDay,
  selectedCategory,
  selectedCategoryData,
  searchedJoke
});
export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
