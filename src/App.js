import React from "react";
import { Switch, Route } from "react-router-dom";
import Navs from "./components/Navs";
import Home from "./pages/Home";
import Starred from "./pages/Starred";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route>Page not foud : ERROR 404</Route>
    </Switch>
  );
}

export default App;
