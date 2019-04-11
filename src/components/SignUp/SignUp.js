import validate from "../../helpers/validator";

const validators = {
  name: { empty: 'Name cannot be empty' },
  email: { email: 'Email should be a valid email address' },
  password: {empty: 'Password cannot be empty'}
};

export default {
  data() {
    return {
      name: '',
      email: '',
      password: "",
      errors: {
        name: [],
        email: [],
        password: []
      }
    }
  },

  methods: {

    register(e) {
      e.preventDefault();
      const result = validate(validators, this.$data);
      this.errors = result.errors;
      if(result.isValid) {
        console.log("Yuppie")
      }
    },

    hasError(field) {
      return this.errors[field].length > 0;
    }
  }
}