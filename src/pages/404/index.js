import React from 'react';
import Header from '../../modules/header/index.js';
class NotFound extends React.Component {
  componentWillMount() {
    this.props.staticContext && (this.props.staticContext.NotFound = true);
  }
  render() {
    return (
      <div>
        <Header />
        <h1>404</h1>
      </div>
    );
  }
}
export default NotFound;
