import React, { Component } from 'react';
import { connect } from "react-redux";

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from '@/views/login/index.jsx'
import Layout from '@/views/layout/index.jsx'


class index extends Component {
  componentDidMount() {
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
                return <Redirect to="/login" />;
              }
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => state.user)(index);;
