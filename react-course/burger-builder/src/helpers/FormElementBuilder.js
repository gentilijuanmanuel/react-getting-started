function createFormElementHelper(name, elementType, type, options, placeholder, value, required, minLength, maxLength) {
  return {
    name,
    elementType,
    elementConfig: {
      type,
      options,
      placeholder
    },
    value,
    validationRules: {
      required,
      minLength,
      maxLength
    },
    isValid: false,
    touched: false
  };
}

export default createFormElementHelper;
