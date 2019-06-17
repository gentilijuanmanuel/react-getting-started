import React from 'react';
// import PropTypes from 'prop-types';

// This is one way to create a HOC
// const withClass = (props) => {
//   const { class, children } = props;

//   return (
//     <div className={class}>
//       {children}
//     </div>
//   );
// };

// This is another way to create a HOC
const withClass = (WrappedComponent, className) => props => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
  );

// withClass.propTypes = {
//   class: PropTypes.element.isRequired,
//   children: PropTypes.element.isRequired
// };

export default withClass;
