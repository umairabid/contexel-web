import { mapGetters } from "vuex";
import TaskForm from "../../../forms/TaskForm.vue";

export default {
  components: {
    "task-form": TaskForm
  },
  computed: {
    ...mapGetters(["currentTask"])
  }
};
