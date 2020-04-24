import React, { Component } from "react";
import queryString from "query-string";

export default class DisplaySurveys extends Component {
  async componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(this.props.location.search);
    const response = await fetch(
      `https://localhost:5001/api/surveys${this.props.location.search}`
    ).then((response) => response.json());
    
    console.log(response);
    return response;
  }

  render() {
    return <>HI</>;
  }
}
