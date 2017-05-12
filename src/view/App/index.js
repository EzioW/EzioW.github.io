import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import '../../common/app.scss';
import { menu, routes } from '../../router';

const { Header, Footer, Content } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  getMeun() {
    let menuEle = null;
    const loop = data => data.map((item) => {
      if (item.children) {
        return (<SubMenu title={<span><Icon type="setting" />{item.title}</span>}>
          {
            loop(item.children)
          }
        </SubMenu>);
      }
      return (<MenuItem key={item.title}>
        <Link to={item.title}>{ item.title === 'Home' ? <Icon type="home" /> : null }{item.title}</Link>
      </MenuItem>);
    });

    menuEle = loop(menu);
    return menuEle;
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
              {
                this.getMeun()
              }
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
