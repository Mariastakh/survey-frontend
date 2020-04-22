import React, { Component } from "react";
import getTopics from "../Services/getTopics";

export default class DisplayTopics extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      topics: null,
    };
  }

  async componentDidMount() {
    try {
      const response = getTopics();
      const topics = await response.json();

      this.setState({ topics });
    } catch (err) {
      console.error(err);
    }
  }

  render(){
      return(
          <div>
              <h2>Welcome</h2>
              {this.state.topics}
          </div>
      )
  }
}
