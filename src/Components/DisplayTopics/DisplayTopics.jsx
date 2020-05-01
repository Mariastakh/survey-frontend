import React, { Component } from "react";
import SurveyButton from "../SurveyButton";
import "../../styles/global.css";

export default class DisplayTopics extends Component {
  constructor(props) {
    super(props);

    const fillWithFalse = Array(this.props.length).fill(false);

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      selected: fillWithFalse,
    };
  }

  handleClick(i) {
    const selected = this.state.selected.slice();
    selected[i] = !selected[i];

    this.setState({ selected });
  }

  renderButton(i) {
    const { selected } = this.state;
    return (
      <SurveyButton
        key={this.props.topics[i]}
        topic={this.props.topics[i]}
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
    e.preventDefault();
    let selectedTopics = [];
    for (let i = 0; i < this.props.topics.length; i++) {
      if (this.state.selected[i] === true) {
        selectedTopics.push(this.props.topics[i]);
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
        {this.renderButtons()}
        <form onSubmit={this.handleSubmit}>
          <div>
            <button type="submit">Do survey</button>
          </div>
        </form>
      </>
    );
  }

  render() {
    return (
      <div data-testid="DisplayTopics">
        {this.props.topics !== undefined ? this.listOfTopics() : "error"}
      </div>
    );
  }
}
