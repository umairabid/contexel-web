import AppModal from "../../../utils/AppModal.vue";
import WriterForm from "../../forms/WriterForm.vue";
import UserAvatar from "../../../utils/UserAvatar";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "app-modal": AppModal,
    "writer-form": WriterForm,
    "user-avatar": UserAvatar
  },
  data() {
    return {
      showModal: false,
      modalData: {}
    };
  },
  created() {
    this.getWriters();
  },
  computed: {
    ...mapGetters(["writers"])
  },
  methods: {
    save(writer) {
      this.saveWriter(writer).then(() => (this.showModal = false));
    },
    openAddModal() {
      this.modalData = {};
      this.showModal = true;
    },
    editWriter(id) {
      this.modalData = this.writers.find(w => w.id === id);
      this.showModal = true;
    },
    ...mapActions(["saveWriter", "getWriters", "deleteWriter"])
  }
};
