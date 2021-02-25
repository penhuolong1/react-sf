import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Layout ,Menu, Dropdown, message, Button } from 'antd';
import { connect } from 'react-redux'
import {
  CaretDownOutlined
} from '@ant-design/icons';
import { loginOut } from '@/api/user'
import { getUserInfo } from '@/store/actions/user.js'

const { Header } = Layout;

class header extends Component {
  logout = () => {
    loginOut().then(res => {
      if (res.state === 100) {
        message.success(res.message)
        // this.props.history.push('/login')
        this.props.getUserInfo()
      }
    })
  }
  menu = (
    <Menu>
      <Menu.Item>
        <span onClick={this.logout}>退出</span>
      </Menu.Item>
    </Menu>
  );
  render() {
    console.log(this.props)
    return (
      <Header className="main-header">
        <Dropdown overlay={this.menu} trigger={['click']}>
          <div className="header-info">
            <p className="txt">{this.props.userInfo.result.name}</p>
            <p className="txt">{this.props.userInfo.courtName}</p>
            <p className="txt role">{this.props.userInfo.roleName}</p>
            <CaretDownOutlined className="header-icon" />
          </div>
        </Dropdown>,
      </Header>
    );
  }
}

export default connect(state => state.user, { getUserInfo })(withRouter(header));