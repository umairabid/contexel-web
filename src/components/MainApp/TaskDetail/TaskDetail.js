import { mapActions, mapGetters } from "vuex";

export default {
  created() {
    if (!this.currentTask.id !== this.$route.params.id)
      this.getTask(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["currentTask"])
  },
  methods: {
    ...mapActions(["getTask"])
  }
};
