import React, { Component } from 'react';
import { connect } from "react-redux";

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { userInfo } from '@/api/user'
import { setUserInfo } from '@/store/actions/user.js'
import Login from '@/views/login/index.jsx'
import Layout from '@/views/layout/index.jsx'


class index extends Component {
  componentDidMount() {
    userInfo().then(res => {
      this.props.setUserInfo(res)
    })
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route
            path="/"
            render={() => {
              if (this.props.userInfo?.roleType) {
                return <Layout />
              } else {
                console.log(123)
                return <Redirect to="/login" />;
              }
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => state.user, {setUserInfo})(index);;
