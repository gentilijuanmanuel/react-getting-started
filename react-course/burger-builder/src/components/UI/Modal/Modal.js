import React from 'react';
import PropTypes from 'prop-types';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  const { children, show, closeModal } = props;

  return (
    <Aux>
      <Backdrop show={show} clicked={closeModal} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}
      >
        {children}
      </div>
    </Aux>
  );
};

const shouldModalUpdate = (oldProps, nextProps) =>
  oldProps.show === nextProps.show && oldProps.children === nextProps.children;

modal.propTypes = {
  children: PropTypes.element.isRequired,
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default React.memo(modal, shouldModalUpdate);
