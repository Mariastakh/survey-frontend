import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import DisplayTopics from "./Components/DisplayTopics"
import DisplaySurveys from "./Components/DisplaySurveys"

function App(){
  return (
    <main>
      <Router>
        <Route path="/" exact component={DisplayTopics} />
        <Route path="/surveys" component={DisplaySurveys} /> 
      </Router>
    </main>
  );
}

export default App;