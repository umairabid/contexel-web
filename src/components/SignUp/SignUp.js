import validate from "../../helpers/validator";
import apiClient from "../../utils/apiClient";
import { setUser } from "../../utils/storage";

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
      //return this.$router.push('Dashboard');
      const result = validate(validators, this.$data);
      this.errors = result.errors;
      if(result.isValid) {
        apiClient('POST', '/users', {
          user: {
            name: this.name,
            email: this.email,
            password: this.password,
            profile: {}
          }
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