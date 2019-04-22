import EntityAvatar from "../../utils/EntityAvatar.vue";
import { getUser, clear, getRole } from "../../utils/storage";
import navigation from "../../helpers/navigation";

export default {
  components: {
    "entity-avatar": EntityAvatar
  },
  data() {
    return {
      user: getUser(),
      nav: navigation[getRole()]
    };
  },
  methods: {
    logout() {
      clear();
      this.$router.push({ name: "Home" });
    }
  }
};
