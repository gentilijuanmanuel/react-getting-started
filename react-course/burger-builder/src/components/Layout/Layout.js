import React, {Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  closeSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  }

  render() {
    const { showSideDrawer } = this.state;
    const { children } = this.props;

    return (
      <Aux>
        <Toolbar />
        <SideDrawer showSideDrawer={showSideDrawer} closeSideDrawer={this.closeSideDrawerHandler} />
        <main className={classes.Content}>
          { children }
        </main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
