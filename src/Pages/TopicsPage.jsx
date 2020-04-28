import React, { Component } from "react";
import Header from "../Components/Header";
import getTopics from "../Services/getTopics";
import DisplayTopics from "../Components/DisplayTopics/DisplayTopics";

export default class TopicsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      topics: null,
    };
  }

  callService() {
    getTopics().then(
      (result) => {
        this.setState({
          isLoaded: true,
          topics: result,
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

  async componentDidMount() {
    this.callService();
  }

  render() {
    const { error, isLoaded, topics } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
           <Header />
           <h2>Surveys</h2>
          <DisplayTopics topics={topics} />
        </div>
      );
    }
  }

}
