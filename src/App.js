import React from "react";
import { Switch, Route } from "react-router-dom";
import Blog from "./components/menuLink/Blog"
import Home from "./components/menuLink/Home"
import './App.css';
import Form from "./components/menuLink/Form"
import Source from "./components/menuLink/Source"


function App() {
  return (
    <>
    <Switch>
    <Route exact path="/">
       <Home />
    </Route>
    </Switch>
            <Switch>
    <Route exact path="/blog">
       <Blog />
    </Route>
    </Switch>
        <Switch>
    <Route exact path="/projects">
       <Source />
    </Route>
    </Switch>
    <Switch>
    <Route exact path="/contact">
       <Form />
    </Route>
    </Switch>

      
    </>
  );
}

export default App;
