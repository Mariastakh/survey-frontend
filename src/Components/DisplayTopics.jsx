import React, { Component } from "react";
import getTopics from "../Services/getTopics";

export default class DisplayTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      topics: []
    };
  }

  async componentDidMount() {
    fetch("https://localhost:5001/api/topics")
    .then(res => res.json())
    .then(
      (result) => {
          console.log(result);
        this.setState({
          isLoaded: true,
          topics: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
         error
        });
      }
    )
  }

  render(){
    const { error, isLoaded, topics } = this.state;
    if (error)
    {
      return <div>Error: { error.message } </div>
    } else if (!isLoaded){
      return <div>Loading...</div>
    } else {
    let t = (
      <>
      <h2>Surveys</h2>
       <ul>
            {topics.map(item => (
            <li key={item}>{item}</li>
          ))}
          </ul>
         </>
    ); 
      return t;
              }
  }
}
