import React, { Component } from "react";
import getTopics from "../Services/getTopics";

export default class DisplayTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          topics: result
        });
      },
      (error) => {
        this.setState({
         error
        });
      }
    )
  }

  render(){
    let topics = (
        <>
            <div>
              <h2>Welcome</h2>
              {this.state.topics.map(item => (
            <li key={item}>{item}</li>
          ))}
          </div>
         </>
    ); 
      return topics;
  }
}
