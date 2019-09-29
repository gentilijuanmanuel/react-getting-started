function createFormElementHelper(
    name,
    elementType,
    type,
    options,
    placeholder,
    value,
    required,
    minLength,
    maxLength,
    validationErrorMessage
  ) {
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
    touched: false,
    validationErrorMessage
  };
}

export default createFormElementHelper;
