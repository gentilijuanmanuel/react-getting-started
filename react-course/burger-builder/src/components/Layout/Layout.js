import React from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux';

const layout = (props) => {
  const { children } = props;

  return (
    <Aux>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main>
        { children }
      </main>
    </Aux>
  );
};

layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default layout;
