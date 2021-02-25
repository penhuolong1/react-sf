import React, { Component } from 'react';
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

class index extends Component {
  turn = () => {
    this.props.history.push('/33333')
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.turn}>跳转</Button>
      </div>
    );
  }
}

export default withRouter(index);