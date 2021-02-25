import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './components/header'
import Content from './components/content'
import './index.scss'

class index extends Component {
  render() {
    return (
      <Layout className="main">
        <Header></Header>
        <Content></Content>
      </Layout>
    );
  }
}

export default index;
