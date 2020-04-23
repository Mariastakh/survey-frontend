import React, { Component } from "react";
import getTopics from "../Services/getTopics";

export default class DisplayTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      topics: [],
    };
  }

  async componentDidMount() {
    getTopics().then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          topics: result,
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      }
    );
  }

  render() {
    const { error, isLoaded, topics } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let listOfTopics = (
        <>
          <h2>Surveys</h2>
          {topics.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </>
      );
      return listOfTopics;
    }
  }
}
