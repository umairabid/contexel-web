import UserAvatar from "../../utils/UserAvatar.vue";
import { getUser, clear, getRole } from "../../utils/storage";
import navigation from "../../helpers/navigation";

export default {
  components: {
    "user-avatar": UserAvatar
  },
  data() {
    return {
      user: getUser(),
      nav: navigation[getRole()]
    }
  },
  methods: {
    logout() {
      clear();
      this.$router.push({name : 'Home'})
    }
  }
}