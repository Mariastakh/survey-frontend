import React, { Component } from "react";
import getTopics from "../Services/getTopics";
import SurveyButton from "../Components/SurveyButton";
import { Link } from 'react-router-dom';

export default class DisplayTopics extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      topics: [],
      selected: [],
    };
  }

  async componentDidMount() {
    getTopics().then(
      (result) => {
        console.log(result);
        const fillWithFalse = Array(result.length).fill(false);
        this.setState({
          isLoaded: true,
          topics: result,
          selected: fillWithFalse,
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

  handleClick(i) {
    const selected = this.state.selected.slice();
    selected[i] = !selected[i];

    this.setState({ selected: selected });
    console.log("clicked!");
  }

  renderButton(i) {
    return (
      <SurveyButton
        key={this.state.topics[i]}
        topic={this.state.topics[i]}
        selected={this.state.selected[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderButtons() {
    let array = [];
    for (let i = 0; i < this.state.topics.length; i++) {
      array.push(this.renderButton(i));
    }
    return <div>{array}</div>;
  }


  handleSubmit = e => {
    //e.preventDefault();
    const query = "topics=bananas"
   const path = "/surveys?topics=bananas";
   this.props.history.push(path);
  };


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
          {this.renderButtons()}
          <form onSubmit={this.handleSubmit}>
            <div>
     
              <button type="submit">Do survey</button>
            </div>
          </form>
        </>
      );
      return listOfTopics;
    }
  }
}
