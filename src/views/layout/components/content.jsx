import React, { Component } from 'react';
import { Layout } from 'antd';
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import routeMap from '@/config/routeMap.js'
import { connect } from 'react-redux'
import { whiteList } from '@/config/whiteList.js'
import { getUserInfo } from '@/store/actions/user.js'

const { Content } = Layout;

class content extends Component {
  componentWillReceiveProps (nextProps, nextState) {
    if (this.props.location.pathname !== nextProps.location.pathname){
      if (whiteList.indexOf(nextProps.location.pathname) === -1) {
        this.props.getUserInfo()
      }
    }
  }
  render() {
    return (
      <Content>
        <Switch>
          {
            routeMap.map((item, index) => {
              return (
                <Route exact path={item.path} component={item.component} key={index}></Route>
              )
            })
          }
          <Redirect to="/404" /> {/* 没有对应路由就匹配 */} 
        </Switch>
      </Content>
    );
  }
}

export default connect(state => state.user, {getUserInfo})(withRouter(content));