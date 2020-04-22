import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import getTopics from "./Services/getTopics"

function App(){
  return (
    <main>
      <Router>
        <Route path="/"  /> 
      </Router>
      {getTopics()}
    </main>
  );
}

export default App;