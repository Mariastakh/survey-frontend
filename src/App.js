import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import DisplayTopics from "./Components/DisplayTopics"

function App(){
  return (
    <main>
      <Router>
        <Route path="/" component={DisplayTopics} /> 
      </Router>
    </main>
  );
}

export default App;