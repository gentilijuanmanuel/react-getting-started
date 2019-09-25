function createFormElementHelper(elementType, type, placeholder, value) {
  return {
    elementType,
    elementConfig: {
      type,
      placeholder
    },
    value
  };
}

export default createFormElementHelper;
