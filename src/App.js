import './App.css';
import React, { Component } from 'react';
import Routers from './router/index.jsx'
import { Provider } from 'react-redux'
import { withRouter } from "react-router-dom";
import store from './store'

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Routers></Routers>
        </Provider>
      </div>
    );
  }
}

export default App;
