import AppModal from "../../../utils/AppModal.vue";
import TaskForm from "../../forms/TaskForm.vue";
import { TaskModel } from "../../../store/models/taskModels";
import UserAvatar from "../../../utils/UserAvatar.vue";
import moment from "moment";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "app-modal": AppModal,
    "task-form": TaskForm,
    "user-avatar": UserAvatar
  },
  created() {
    this.getTasks();
  },
  computed: {
    ...mapGetters(["tasks"])
  },
  data() {
    return {
      showModal: false,
      modalData: new TaskModel()
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    save(task) {
      this.saveTask(task)
        .then(() => (this.showModal = false))
        .catch(err => console.log(err));
    },
    ...mapActions(["getTasks", "saveTask"])
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
