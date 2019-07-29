import AppModal from "../../../../utils/AppModal.vue";
import AddPublication from "./AddPublication.vue";
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { PLATFORM_LABELS } from "../../../../helpers/constants";

export default {
  components: {
    AppModal,
    AddPublication
  },
  created() {
    this.getPublications(this.currentTask.id);
  },
  data() {
    return {
      showModal: false,
      platforms: PLATFORM_LABELS
    };
  },
  methods: {
    ...mapActions(["getPublications", "addPublication", "deletePublication"]),
    add(data) {
      data.taskId = this.currentTask.id;
      this.addPublication(data).then(res => {
        this.showModal = false;
      });
    },
    remove(id) {
      this.deletePublication({ id, taskId: this.currentTask.id });
    }
  },
  computed: {
    ...mapGetters(["currentTask"]),
    publications: function() {
      return this.currentTask.task_publications;
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
