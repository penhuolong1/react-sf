import React, { Component } from 'react';
import { connect } from "react-redux";
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Login from '@/views/login/index.jsx'
import Layout from '@/views/layout/index.jsx'
import { getUserInfo } from '@/store/actions/user.js'
import { whiteList } from '@/config/whiteList.js'

class index extends Component {
  componentDidMount() {
    if (whiteList.indexOf(this.props.location.pathname) === -1) {
      console.log(2)
      this.props.getUserInfo()
    }
  }
  componentWillReceiveProps (nextProps, nextState) {
    if (this.props.location.pathname !== nextProps.location.pathname){
      if (whiteList.indexOf(nextProps.location.pathname) === -1) {
        console.log(3)
        this.props.getUserInfo()
      }
    }
  }
  render() {
    console.log(234444)
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login"
          render={() => {
            if (this.props.userInfo?.roleType) {
                return <Layout />
              } else {
                return <Login />;
              }
            }}
          ></Route>
          <Route
            path="/"
            render={() => {
              if (this.props.userInfo?.roleType) {
                return <Layout />
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => state.user, {getUserInfo})(withRouter(index));;
