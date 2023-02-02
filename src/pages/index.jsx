import React from "react";
import Header from "./layout/header";
import Menus from "./layout/menus";
import Content from "./layout/content";
import "./index.less";

const RootPage = () => {
  return (
    <div className="pro">
      <Header />
      <div className="pro-content">
        <Menus />
        <Content />
      </div>
    </div>
  );
};

export default RootPage;
