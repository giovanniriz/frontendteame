import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import OverviewPage from "../pages/OverviewPage";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/main/overview" component={OverviewPage} />
          <Route path="/main/characters" component={OverviewPage} />
          <Route path="/main/review" component={OverviewPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
