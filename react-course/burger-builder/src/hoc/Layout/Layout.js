import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  closeSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  }

  toggleSideDrawerHandler = () => {
    this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer }));
  }

  render() {
    const { showSideDrawer } = this.state;
    const { children } = this.props;

    return (
      <Aux>
        <Toolbar hamburgerButtonClicked={this.toggleSideDrawerHandler} />
        <SideDrawer
          showSideDrawer={showSideDrawer}
          closeSideDrawer={this.closeSideDrawerHandler}
        />
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
