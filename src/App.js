import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import DisplaySurveys from "./Components/DisplaySurveys";
import TopicsPage from "./Pages/TopicsPage";

function App(){
  return (
    <main>
      <Router>
        <Route path="/" exact component={TopicsPage} />
        <Route path="/surveys" component={DisplaySurveys} /> 
      </Router>
    </main>
  );
}

export default App;