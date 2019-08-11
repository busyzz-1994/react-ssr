import React, { Component } from 'react';
export default styles => ProxyComponent => {
  return class extends Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.styles.push(styles._getCss());
      }
    }
    render() {
      return <ProxyComponent {...this.props} />;
    }
  };
};
