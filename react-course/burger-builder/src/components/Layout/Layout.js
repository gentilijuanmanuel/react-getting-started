import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';

const layout = (props) => {
  const { children } = props;

  return (
    <Aux>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={Classes.Content}>
        { children }
      </main>
    </Aux>
  );
};

layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default layout;
