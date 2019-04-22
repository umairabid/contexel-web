import AppModal from "../../../utils/AppModal.vue";
import WriterForm from "../../forms/WriterForm.vue";
import EntityAvatar from "../../../utils/EntityAvatar";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "app-modal": AppModal,
    "writer-form": WriterForm,
    "entity-avatar": EntityAvatar
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
      this.saveWriter(writer)
        .then(() => (this.showModal = false))
        .catch(err => console.log(err));
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
