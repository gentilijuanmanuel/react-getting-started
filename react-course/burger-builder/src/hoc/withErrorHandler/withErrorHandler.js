import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => class extends Component {
  state = {
    error: null
  };

  componentWillMount() {
    this.requestInterceptor = axios.interceptors.request.use((request) => {
      this.setState({ error: null });
      return request;
    });
    this.responseInterceptor = axios.interceptors.response.use(response => response, (error) => {
      this.setState({ error });
    });
  }

  componentWillUnmount() {
    axios.interceptors.request.eject(this.requestInterceptor);
    axios.interceptors.response.eject(this.responseInterceptor);
  }

  errorConfirmedHandler = () => {
    this.setState({ error: null });
  }

  render() {
    const { error } = this.state;

    return (
      <Aux>
        <Modal show={error} closeModal={this.errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...this.props} />
      </Aux>
    );
  }
};

export default withErrorHandler;
