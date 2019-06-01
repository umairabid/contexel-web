import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import UserAvatar from "../../../../utils/UserAvatar";

export default {
  data() {
    return {};
  },
  created() {
    this.getSubmissions(this.currentTask.id);
  },
  components: {
    "user-avatar": UserAvatar
  },
  computed: {
    ...mapGetters(["currentTask"])
  },
  methods: {
    ...mapActions(["getSubmissions"])
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
