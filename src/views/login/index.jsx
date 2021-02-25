import React, { Component } from 'react';
import md5 from 'md5'
import { Form, Input, Button, message } from 'antd';
import { Redirect } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { login, caseList, userInfo } from '@/api/user'
import { setUserInfo } from '@/store/actions/user.js'
import './index.scss'

class Login extends Component {
  state = {
    token: null
  }
  componentDidMount() {
  }
  // 获取登陆信息
  getUserInfo = () => {
    userInfo().then(res => {
      this.props.setUserInfo(res)
      this.props.history.push('/index')
    })
  }
  // 登陆提交
  loginSubmit = values => {
    const params = {
      ...values
    }
    params.password = md5(params.password)
    params.check = true
    login(params).then(res => {
      if (res.state === 100) {
        message.success(res.message)
        this.getUserInfo()
      }
    })
  }
  render() {
    const obj = {
      username: '厦门市诉非联动中心',
      password: 'sfld2020'
    }
    return (
      <div className="login-wrapper">
        <div className="content">
          <h2>用户登陆</h2>
          <Form layout="inline" initialValues={obj} onFinish={this.loginSubmit}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
            >
              <Input
                placeholder="用户名"
                prefix={<UserOutlined className="form-icon" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
            >
              <Input.Password
                placeholder="密码"
                prefix={<LockOutlined  className="form-icon" />}
              />
            </Form.Item>
            <Form.Item>
              <Button className="login-btn" type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default connect(state => { return {...state.user}}, {setUserInfo})(Login);
