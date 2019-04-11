export default function validate(validators, data) {
  let isValid = true;
  const errors = {};
  for(var key in validators) {
    var fieldErrors = validateField(data[key], validators[key]);
    errors[key] = fieldErrors;
    if(fieldErrors.length > 0) isValid = false
  }
  return { isValid, errors };
}

function validateField(value, validator) {
  var errors = [];
  for(var key in validator) {
    var rule = key;
    var message = validator[key];
    if(!rules[rule](value))
      errors.push(message);
  }
  return errors;
}

const rules = {
  empty(val) {
    return val && val != '' && val.length > 0;
  },

  email(val) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val)
  }
}