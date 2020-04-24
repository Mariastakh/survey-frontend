import React, { Component } from "react";

export default class DisplaySurveys extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    console.log(this.props.location.search);

    const response = await fetch(
      "https://localhost:5001/api/surveys?topics=bananas"
    ).then((response) => response.json());
    
    console.log(response);
    return response;
  }

  render() {
    return <>HI</>;
  }
}
