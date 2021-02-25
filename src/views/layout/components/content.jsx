import React, { Component } from 'react';
import { Layout } from 'antd';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import routeMap from '@/config/routeMap.js'
const { Content } = Layout;

class content extends Component {
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

export default content;