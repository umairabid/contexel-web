import AppModal from "../../../utils/AppModal.vue";
import TaskForm from "../../forms/TaskForm.vue";
import { TaskModel } from "../../../store/models/taskModels";
import { getUser } from "../../../utils/storage";
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
    if (this.writers.length === 0) this.getWriters();
    this.getTasks();
  },
  computed: {
    ...mapGetters(["tasks", "writers"]),
    assignees() {
      const user = getUser();
      const assignees = this.writers.concat([
        {
          user_id: user.id,
          name: user.name
        }
      ]);
      return assignees;
    }
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
    ...mapActions(["getTasks", "getWriters", "saveTask"])
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
