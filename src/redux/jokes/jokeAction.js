import { JokeActionType } from "./jokeTypes";

export const setJokeOfTheDay = joke => ({
  type: JokeActionType.SET_JOKE_OF_THE_DAY,
  payload: joke
});

export const setCategories = categories => ({
  type: JokeActionType.SET_CATEGORIES,
  payload: categories
});

export const setSelectedCategoryData = category => ({
  type: JokeActionType.SET_CATEGORY_DATA,
  payload: category
});

export const setSelectedCategory = category => ({
  type: JokeActionType.SET_SELECTED_CATEGORY,
  payload: category
});

export const setSearchedJoke = joke => ({
  type: JokeActionType.SET_SEARCHED_JOKE,
  payload: joke
});

export const setSearchData = data => ({
  type: JokeActionType.SET_SEARCH_DATA,
  payload: data
});

export const setValidationError=error=>({
  type:JokeActionType.SET_VALIDATION_ERROR,
  payload:error
})