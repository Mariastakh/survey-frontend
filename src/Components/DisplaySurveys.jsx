import React, { Component } from "react";
import queryString from "query-string";

export default class DisplaySurveys extends Component {
  async componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(values.topics);
    const response = await fetch(
      `https://localhost:5001/api/surveys?topics=${values.topics}`
    ).then((response) => response.json());

    console.log(response);
    return response;
  }

  render() {
    return <>HI</>;
  }
}
