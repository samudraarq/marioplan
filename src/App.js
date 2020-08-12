import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/project/:id">
            <ProjectDetails />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
