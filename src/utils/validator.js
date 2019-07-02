export function validateTask(task) {
  const validators = {
    title: { empty: "Title cannot be empty" },
    due_date: { empty: "Due Date cannot be empty" },
    max_plagiarism: { greaterThanZero: "Max Plagiarism cannot be empty" },
    max_mistakes: { greaterThanZero: "Max Mistakes cannot be empty" },
    payment_value: { greaterThanZero: "Rate Per word cannot be empty" }
  };
  return validate(validators, task);
}

export function validateWriter(data) {
  const validators = {
    name: { empty: "Name cannot be empty" },
    email: { email: "Email should be a valid email address" },
    rate_per_word: { empty: "Rate Per word cannot be empty" }
  };
  if (!data.id) validators["password"] = { empty: "Password cannot be empty" };
  return validate(validators, data);
}

export function validateTeam(data) {
  const validators = {
    name: { empty: "Name cannot be empty" },
    description: { empty: "Description cannot be empty" }
  };
  return validate(validators, data);
}

export function validateConnectWordpress(data) {
  const validators = {
    // url: { empty: "URL cannot be empty", url: "Should be a valid URL" },
    url: { empty: "URL cannot be empty" },
    username: { empty: "Username cannot be empty" },
    password: { empty: "Password cannot be empty" }
  };
  return validate(validators, data);
}

export default function validate(validators, data) {
  let isValid = true;
  const errors = {};
  for (var key in validators) {
    var fieldErrors = validateField(data[key], validators[key]);
    errors[key] = fieldErrors;
    if (fieldErrors.length > 0) isValid = false;
  }
  return { isValid, errors };
}

function validateField(value, validator) {
  var errors = [];
  for (var key in validator) {
    var rule = key;
    var message = validator[key];
    if (!rules[rule](value)) errors.push(message);
  }
  return errors;
}

const rules = {
  empty(val) {
    return val && val != "" && val.toString().length > 0;
  },

  email(val) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val);
  },
  greaterThanZero(val) {
    return Number(val) > 0;
  },
  url(val) {
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
      val
    );
  }
};
