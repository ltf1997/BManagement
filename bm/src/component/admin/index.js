import React,{Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
import Nav from '../nav'
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

class Admin extends Component {

  render(){
    return(
      <Fragment>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Nav></Nav>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>

                <Breadcrumb.Item>{this.props.location.pathname.split('/')[2]}</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.location.pathname.split('/')[3]}</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Fragment>
    )
  }
}
export default withRouter(Admin)