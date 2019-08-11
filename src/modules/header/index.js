import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.css';
export default class extends Component {
  componentWillMount() {
    if (styles._getCss) {
      this.props.staticContext.styles.push(styles._getCss());
    }
  }
  render() {
    return (
      <div className={styles.test}>
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
      </div>
    );
  }
}
