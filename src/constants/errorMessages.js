const messages = {
    required: field => `The field "${field}" is required.`,
    maxLength: (field, length) => `Max length of the field "${field}" is ${length} symbols.`,
    minLength: (field, length) => `Min length of the field "${field}" is ${length} symbols`
};

export default messages;
