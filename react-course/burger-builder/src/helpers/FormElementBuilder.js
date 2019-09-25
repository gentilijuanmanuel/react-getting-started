function createFormElementHelper(elementType, type, options, placeholder, value) {
  return {
    elementType,
    elementConfig: {
      type,
      options,
      placeholder
    },
    value
  };
}

export default createFormElementHelper;
