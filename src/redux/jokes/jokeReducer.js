import { JokeActionType } from "./jokeTypes";

const INITIAL_STATE = {
  jokeOfTheDay: {},
  categories: [],
  selectedCategoryData: {},
  selectedCategory: "",
  searchedJoke: [],
  search: "",
  error: ""
};

const jokeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JokeActionType.SET_JOKE_OF_THE_DAY:
      return {
        ...state,
        jokeOfTheDay: action.payload
      };
    case JokeActionType.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case JokeActionType.SET_CATEGORY_DATA:
      return {
        ...state,
        selectedCategoryData: action.payload
      };
    case JokeActionType.SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload
      };
    case JokeActionType.SET_SEARCHED_JOKE:
      return {
        ...state,
        searchedJoke: action.payload
      };
    case JokeActionType.SET_SEARCH_DATA:
      return {
        ...state,
        search: action.payload
      };
    case JokeActionType.SET_VALIDATION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
export default jokeReducer;
