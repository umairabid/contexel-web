import { getUser } from "../../../utils/storage";
import { mapActions, mapGetters } from "vuex";
import { TASK_STATUS as statuses } from "../../../helpers/constants";

export default {
  created() {
    this.getDashboard();
  },
  data() {
    return {
      user: getUser(),
      statuses
    };
  },
  computed: {
    summary: function() {
      return this.dashboard.summary || {};
    },
    tasks: function() {
      return this.dashboard.tasks || {};
    },
    writers: function() {
      return this.dashboard.writers || {};
    },
    teams: function() {
      return this.dashboard.teams || {};
    },
    ...mapGetters(["dashboard"])
  },
  methods: {
    ...mapActions(["getDashboard"])
  }
};
