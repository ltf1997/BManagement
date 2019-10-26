import React, {Component} from 'react'
import {HashRouter,Route,withRouter,Switch,Redirect} from 'react-router-dom'
import ComponentImport from './utils/componentImport'
const Login = ComponentImport(()=>import('./component/login'))
const Reg = ComponentImport(()=>import('./component/reg'))
const Admin = ComponentImport(()=>import('./component/admin'))
const UserList = ComponentImport(()=>import('./component/user'))
const UserAdd = ComponentImport(()=>import('./component/userAdd'))
const Home = ComponentImport(()=>import('./component/home'))
const OrderList = ComponentImport(()=>import('./component/order'))
const OrderAdd = ComponentImport(()=>import('./component/orderAdd'))
const OrderNo = ComponentImport(()=>import('./component/orderNo'))


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