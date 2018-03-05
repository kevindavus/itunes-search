import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Gallery from "./pages/Gallery";
import Album from "./pages/Album";

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Artist/:artist" component={Gallery} />
      <Route exact path="/album/:artist/:album" component={Album} />
    </Switch>
  </div>
);

export default Routes;
