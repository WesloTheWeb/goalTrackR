import React from 'react';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;
