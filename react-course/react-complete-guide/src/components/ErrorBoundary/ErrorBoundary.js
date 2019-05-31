import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({
      hasError: true,
      errorMessage: errorInfo
    });
  }

  render() {
    const { hasError, errorMessage } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div>
          <h1>Oops! Something went wrong</h1>
          <p>{errorMessage}</p>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: undefined
};

ErrorBoundary.propTypes = {
  children: PropTypes.element
};

export default ErrorBoundary;
