import React from "react";
import { Switch, Route } from "react-router-dom";
import BreadCrumbPage from "./bread-crumb";
import UserPage from "@src/pages/user";

const Content = () => {
  return (
    <div className="pro-content-main">
      <div className="main">
        <BreadCrumbPage />
        <Switch>
          <Route path="/user" component={UserPage} />
        </Switch>
      </div>
    </div>
  );
};

export default Content;
