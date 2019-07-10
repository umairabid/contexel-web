import AppModal from "../../../../utils/AppModal.vue";
import AddPublication from "./AddPublication.vue";
import { mapActions, mapGetters } from "vuex";

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
      showModal: false
    };
  },
  methods: {
    ...mapActions(["getPublications"])
  },
  computed: {
    ...mapGetters(["currentTask"])
  }
};
