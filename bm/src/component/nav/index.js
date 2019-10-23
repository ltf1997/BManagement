import React,{Component,Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

let navData = [
  {name:'首页',path:'/admin/home',type:'notification'},
  {name:'订单审核',type:'laptop',children:[
    {name:'查看全部',path:'/admin/order/orderlist'},
    {name:'添加订单',path:'/admin/order/orderAdd'},
    {name:'未通过',path:'/admin/order/orderNo'}
  ]},
  {name:'客户管理',type:'user',children:[
    {name:'查看全部',path:'/admin/user/userlist'},
    {name:'添加客户',path:'/admin/user/userAdd'}
  ]},
  
]
class Nav extends Component {
  jump=(path)=>{
    this.props.history.push(path)
  }
  renderItem=(data)=>{
    return data.map((item,index)=>{
      
        if(item.children){
          return(
            <SubMenu
              title={
                <span>
                  <Icon type={item.type} />
                  {item.name}
                </span>
              }
            >            
              {item.children.map((childitem,childindex)=>{
                return(
                  <Menu.Item onClick={this.jump.bind(this,childitem.path)}>{childitem.name}</Menu.Item>
                )               
              })}     
            </SubMenu>
          )
        }else{
          return(
            <Menu.Item key={index} onClick={this.jump.bind(this,item.path)}>
              <span>
                <Icon type={item.type} />
                {item.name}
              </span>
            </Menu.Item>
          )
        }
      
    })
  }
  render(){
    return(
      <Fragment>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >

          {this.renderItem(navData)}

          

       
        </Menu>
      </Fragment>
    )
  }
}
export default withRouter(Nav)