import React, { Component } from "react";
 import { random } from "../services/jokeServices";

class RandomJokes extends Component {
  state = {};
  async componentDidMount() {
    const { data } =await random();
    console.log(data);
  }
  render() {
    return <h1>hi</h1>;
  }
}

export default RandomJokes;
