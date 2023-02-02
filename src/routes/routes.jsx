import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RootPage from "@src/pages";
import LoginPage from "@src/pages/login";
// import EmptyPage from "@src/pages/empty";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={RootPage} />
        {/* <Route path="*" component={EmptyPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
