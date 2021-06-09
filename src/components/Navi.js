import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  LineChartOutlined,
  MedicineBoxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Header, Content, Footer, Sider, } from "antd/lib/layout";
import SubMenu from "antd/lib/menu/SubMenu";
// import Sider from "antd/lib/layout/Sider"
export default function Navi() {
  return (
    <Sider>
      <Menu
        style={{ minHeight: "100vh", maxWidth: "25vh" }}
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="0">Home</Menu.Item>

        <SubMenu icon={<MedicineBoxOutlined />} title="Meal Plan">
          <Menu.Item>View Meal Plan</Menu.Item>
          <Menu.Item>Edit Meal Plan</Menu.Item>
        </SubMenu>

        <SubMenu icon={<LineChartOutlined />} title="Progress">
          <Menu.Item>View Progress</Menu.Item>
        </SubMenu>

        <Menu.Item key="profile" icon={<UserOutlined />}>
          My Profile
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
