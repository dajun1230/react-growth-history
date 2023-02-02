import React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import Routes from "./routes";
import "./index.less";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Routes />
    </ConfigProvider>
  );
}

export default App;
