import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import '../../common/app.less';
import routes from '../../router';

const { Header, Footer, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header className="app-header">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              theme="dark"
              mode="horizontal"
              style={{ zIndex: 2 }}
            >
              <SubMenu title={<span><Icon type="setting" />JavaScript</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu title={<span><Icon type="setting" />CSS</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu title={<span><Icon type="setting" />Lib</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </Header>
          <Content className="app-content">
            {
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))
            }
          </Content>
          <Footer className="app-footer">@Copyrigth Seraph</Footer>
        </Layout>
      </Router>
    );
  }

}

export default App;
