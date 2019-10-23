import React,{Component,Fragment} from 'react'
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;
class Nav extends Component {
  
  render(){
    return(
      <Fragment>
        
        
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          
            <Menu.Item key="1"
            title={
              <span>
                <Icon type="user" />
                首页
              </span>
            }>首页</Menu.Item>
          
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="laptop" />
                订单审核
              </span>
            }
          >
            <Menu.Item key="5">查看全部</Menu.Item>
            <Menu.Item key="6">添加订单</Menu.Item>
            <Menu.Item key="7">未通过</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="notification" />
                客户管理
              </span>
            }
          >
            <Menu.Item key="9">查看全部</Menu.Item>
            <Menu.Item key="10">添加客户</Menu.Item>
          </SubMenu>
        </Menu>
      
      </Fragment>
    )
  }
}
export default Nav