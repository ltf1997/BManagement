import React from 'react'
import {withRouter} from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
import './index.less'
import qs from 'qs'
class Login extends React.Component {
    submit=()=>{
        this.props.form.validateFields((err,data)=>{
            if(err){
                message.error('输入信息有误请重试')
            }else{
                let comVal = qs.stringify({us:123,ps:123})
                this.$axios.get('/yapi/login',comVal)
                .then((data))
                message.success('登录成功，即将跳转页面',1,()=>{
                    this.props.history.push('/admin')
                })
                // this.props.history.push('/admin')
            }
            console.log(err,data)
        })
    }
    jump=()=>{
      console.log(this.props.history)
      this.props.history.push('/reg')
    }
    render() {
      console.log(this,'登录组件')
      let {getFieldDecorator}=this.props.form
    return (
        <div className='login-box'>
        <Card style={ {width:'400px',position:'fixed',top:'20vh',right:'100px'} }>
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('us',{
                    rules: [{ required: true, message: 'Please input your username!' }]
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                
            </Form.Item>

            <Form.Item>
            {getFieldDecorator('ps',{
                rules: [{ required: true, message: 'Please input your Password!' }]
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
                />,
            )}
            </Form.Item>

            <Form.Item>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="#">
                Forgot password
            </a>
            <Button type="primary" onClick={this.submit} className="login-form-button">
                Log in
            </Button>
            Or <a href="javascript:;" onClick={this.jump} >register now!</a>
            </Form.Item>
        </Form>
        </Card>
        </div>
    );
  }
}

export default Form.create()(withRouter(Login))