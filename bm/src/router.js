import React, {Component} from 'react'
import {HashRouter,Route,withRouter,Switch,Redirect} from 'react-router-dom'
import Login from './component/login'
import Reg from './component/reg'
import Admin from './component/admin'
import UserList from './component/user'
import UserAdd from './component/userAdd'
import Home from './component/home'
import OrderList from './component/order'
import OrderAdd from './component/orderAdd'
import OrderNo from './component/orderNo'

class RootRouter extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Redirect exact from="/" to="/login"/>
          <Route path="/login" component={Login}></Route>
          <Route path="/reg" component={Reg}></Route>
          <Route path="/admin" render={()=>{
            return(
              <Admin>
                <Redirect exact from="/admin" to="/admin/home"/>
                <Route path="/admin/home" component={Home}></Route>
                <Route path="/admin/order/orderlist" component={OrderList}></Route>
                <Route path="/admin/order/orderAdd" component={OrderAdd}></Route>
                <Route path="/admin/order/orderno" component={OrderNo}></Route>
                <Route path="/admin/user/userlist" component={UserList}></Route>
                <Route path="/admin/user/useradd" component={UserAdd}></Route>
              </Admin>
            )
          }}>
          </Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default RootRouter