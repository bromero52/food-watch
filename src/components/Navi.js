import React from "react";
import { Layout, Menu, Breadcrumb, Sub } from "antd";

import { Header, Content, Footer } from "antd/lib/layout";
import Sider from 'antd/lib/layout/Sider';
import SubMenu from "antd/lib/menu/SubMenu";
import SubMenuProps from "antd/lib/menu/SubMenu/";
import PieChartOutlined from "antd/lib/icon/";
import { Link } from "react-router-dom";
export default function Navi() {
  return (
    <Sider>
      <Menu
        style={{ minHeight: "100vh", maxWidth: "35vh" }}
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">Home
        <Link to="/" />
        </Menu.Item>

        <SubMenu title="Meal Plan">
          <PieChartOutlined />
          <Menu.Item>View Meal Plan</Menu.Item>
          <Menu.Item>Edit Meal Plan</Menu.Item>
          <Menu.Item>
            Add Meal
            <Link to="/addmeal" className="nav-text">
              A
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu title="Progress">
          <Menu.Item>View Progress</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
