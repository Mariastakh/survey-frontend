import React, { Component } from "react";
import getSurveys from "../Services/getSurveys";

export default class DisplaySurveys extends Component {
  constructor(props){
    super(props)
    this.state={
      error: null,
      isLoaded: false,
      surveys: [],
    }
  }
  async componentDidMount() {
    console.log(this.props.location.search);
    let values = this.props.location.search;
    getSurveys(values={values}).then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          surveys: result,
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
    const { error, isLoaded, surveys } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let groupedSurveys = (
        <>
          <ul>
            {surveys.map(item => (
            <li key={item}>{item}</li>
          ))}
          </ul>
        </>
      );
      return groupedSurveys;
    }
  }
}
