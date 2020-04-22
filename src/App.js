import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App(){
  return (
    <main>
      <Router>
        <Route path="/" /> 
      </Router>
    </main>
  );
}

export default App;