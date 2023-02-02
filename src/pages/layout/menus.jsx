import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";

const items = [
  {
    key: "user",
    label: "用户管理",
    icon: <MailOutlined />,
    children: [
      {
        key: "/user/list",
        label: "用户列表",
      },
    ],
  },
  {
    key: "file",
    label: "文件管理",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "/file/list",
        label: "文件列表",
      },
      {
        key: "/file/upload",
        label: "文件上传",
      },
    ],
  },
];

const rootSubmenuKeys = ["user", "file"];

const Menus = () => {
  const [openKeys, setOpenKeys] = useState(["user"]);
  const [selectedKeys, setSelectedKeys] = useState(["/user/list"]);
  const history = useHistory();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleClickItem = ({ key }) => {
    setSelectedKeys([key]);
    history.push(key);
  };

  return (
    <div className="pro-content-menu">
      <Menu
        mode="inline"
        style={{ width: 256 }}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={selectedKeys}
        items={items}
        onClick={handleClickItem}
      />
    </div>
  );
};

export default Menus;
