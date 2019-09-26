function createFormElementHelper(name, elementType, type, options, placeholder, value) {
  return {
    name,
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
