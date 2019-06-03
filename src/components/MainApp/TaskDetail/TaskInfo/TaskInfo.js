import { mapGetters, mapActions } from "vuex";
import TaskForm from "../../../forms/TaskForm.vue";

export default {
  components: {
    "task-form": TaskForm
  },
  computed: {
    ...mapGetters(["currentTask"])
  },
  methods: {
    save(task) {
      console.log(task);
      this.saveTask(task);
    },
    ...mapActions(["saveTask"])
  }
};
