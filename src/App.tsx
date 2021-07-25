import React from "react";
import "./App.css";
import { TeamPage } from "./pages/TeamPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MatchPage } from "./pages/MatchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/teams/:teamName">
          <TeamPage />
        </Route>
        <Route path="/teams/:teamName/matches/:year">
          <MatchPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
