import validate from "../../helpers/validator";
import apiClient from "../../utils/apiClient";
import { setUser } from "../../utils/storage";

const validators = {
  email: { email: 'Email should be a valid email address' },
  password: {empty: 'Password cannot be empty'}
};

export default {
  data() {
    return {
      email: '',
      password: "",
      errors: {
        email: [],
        password: []
      }
    }
  },

  methods: {

    login(e) {
      e.preventDefault();
      const result = validate(validators, this.$data);
      this.errors = result.errors;
      if(result.isValid) {
        apiClient('POST', '/sessions', {
          email: this.email,
          password: this.password
        }).then(res => {
          setUser(res);
          return this.$router.push('Dashboard');
        })
      }
    },

    hasError(field) {
      return this.errors[field].length > 0;
    }
  }
}