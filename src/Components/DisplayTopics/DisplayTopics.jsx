import React, { Component } from "react";
import getTopics from "../../Services/getTopics";
import SurveyButton from "../SurveyButton";
import "../../styles/global.css";
import Header from "../Header";

export default class DisplayTopics extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      error: null,
      isLoaded: false,
      topics: this.props.topics,
      selected: [false, false, false],
    };
  }

  callService() {
    // getTopics().then(
    //   (result) => {
    //     const fillWithFalse = Array(result.length).fill(false);
    //     this.setState({
    //       isLoaded: true,
    //       topics: result,
    //       selected: fillWithFalse,
    //     });
    //   },
    //   (error) => {
    //     this.setState({
    //       isLoaded: true,
    //       error,
    //     });
    //   }
    // );
  }

  handleClick(i) {
    const selected = this.state.selected.slice();
    selected[i] = !selected[i];

    this.setState({ selected });
  }

  renderButton(i) {
    const { topics, selected } = this.state;
    return (
      <SurveyButton
        key={topics[i]}
        topic={topics[i]}
        selected={selected[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderButtons() {
    let array = [];
    for (let i = 0; i < this.props.topics.length; i++) {
      array.push(this.renderButton(i));
    }
    return <div>{array}</div>;
  }

  handleSubmit(e) {
    //e.preventDefault();
    let selectedTopics = [];
    for (let i = 0; i < this.state.topics.length; i++) {
      if (this.state.selected[i] === true) {
        selectedTopics.push(this.state.topics[i]);
      }
    }

    let query = "";
    for (let i = 0; i < selectedTopics.length; i++) {
      if (i < selectedTopics.length - 1) {
        query += "topics=" + selectedTopics[i] + "&";
      } else {
        query += "topics=" + selectedTopics[i];
      }
    }

    console.log(query);
    const path = `/surveys?${query}`;
    this.props.history.push(path);
  }

  listOfTopics() {
    return (
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
  }

  async componentDidMount() {
    this.callService();
    //console.log(this.props.topics);
  }

  render() {
    return (
      <div data-testid="DisplayTopics">
        <Header />
        {this.props.topics !== undefined ? this.listOfTopics() : "error"}
      </div>
    );
  }
}
