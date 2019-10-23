import React, {Component} from 'react'
import {HashRouter,Route,withRouter,Switch,Redirect} from 'react-router-dom'
import Login from './component/login'
import Reg from './component/reg'
import Admin from './component/admin'
import Nav from './component/nav'

class RootRouter extends Component{
  render(){
    return(
      <HashRouter>
        <Switch>
          <Redirect exact from="/" to="/login"/>
          <Route path="/login" component={Login}></Route>
          <Route path="/reg" component={Reg}></Route>
          <Route path="/admin" component={Admin} render={()=>{
            
          }}></Route>
        </Switch>
      </HashRouter>
    )
  }
}
export default RootRouter