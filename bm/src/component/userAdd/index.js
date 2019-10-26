import React,{Component} from 'react'
import {Input,Button,Card,Alert,Radio} from 'antd'
import qs from 'qs'
import './index.less'
class UserAdd extends Component {
  constructor(props){
    super(props)
    this.state = {
      genderarr:['未知','男','女'],
      value:'',
      name:'',
      age:'',
      location:'',
      tele:''
    }
  }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value:e.target.value
    });
  };

  submit=()=>{
    let {name,age,location,tele,value} = this.state
    let arr = {name,age,location,tele}
    arr.gender = value

    

    let sendData = qs.stringify(arr)
    this.$axios.post('/yapi/admin/user/useradd',sendData,{
      headers: {
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    .then((data)=>{
      if(data.err == 0){
        console.log('添加成功')
      }else{
        console.log('请正确填写')
      }
    })
    .catch((err)=>{
      console.log('添加失败')
    })

    
  }

  render(){
    return(
      <Card>
        <h2>新增客户</h2>
        <label>客户名：<Input placeholder="Name" className='input' onChange={(e)=>{
          this.setState({name:e.target.value})}} value={this.state.name}/></label>
        <label>性别：<br/>
          <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>男</Radio>
            <Radio value={2}>女</Radio>
          </Radio.Group></label><br/>
        <label>年龄：<Input placeholder="Age" className='input' onChange={(e)=>{
          this.setState({age:e.target.value})}} value={this.state.age}/></label>
        <label>住址：<Input placeholder="Location" className='input' onChange={(e)=>{
          this.setState({location:e.target.value})}} value={this.state.location}/></label>
        <label>联系方式：<Input placeholder="Tele" className='input' onChange={(e)=>{
          this.setState({tele:e.target.value})}} value={this.state.tele}/></label>
        <Button onClick={this.submit}>提交</Button>
      </Card>
    )
  }
}
export default UserAdd