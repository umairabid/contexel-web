import AppModal from "../../../utils/AppModal.vue";
import TaskForm from "../../forms/TaskForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "app-modal": AppModal,
    "task-form": TaskForm
  },
  created() {
    if (this.writers.length === 0) this.getWriters();
  },
  computed: {
    ...mapGetters(["writers"])
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    ...mapActions(["getWriters"])
  }
};
