import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Contact from '../components/Contact'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contactus">
       <Contact/>
       </Route>
    </Switch>
  );
}