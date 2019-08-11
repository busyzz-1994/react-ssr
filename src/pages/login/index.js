import React from 'react';
import { connect } from 'react-redux';
import Header from '../../modules/header/index.js';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>我是Login</h1>
      </div>
    );
  }
}
export default Login;
