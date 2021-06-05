import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MailOutlined,
  SettingOutlined,
  PieChartOutlined,
  
} from "antd/lib/icon";

import { Header, Content, Footer, Sider } from "antd/lib/layout";
import SubMenu from "antd/lib/menu/SubMenu";

export default function Navi() {
  return (
    <Menu style={{ minHeight: '100vh', maxWidth:'25vh' }} theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">Home</Menu.Item>

      <SubMenu icon={<PieChartOutlined/>} title="Meal Plan">
        <Menu.Item>View Meal Plan</Menu.Item>
        <Menu.Item>Edit Meal Plan</Menu.Item>
      </SubMenu>

      <SubMenu icon={<PieChartOutlined />} title="Progress">
        <Menu.Item>View Progress</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
