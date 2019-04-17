import AppModal from "../../../utils/AppModal.vue";
import WriterForm from "../../forms/WriterForm.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "app-modal": AppModal,
    "writer-form": WriterForm
  },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters([
      'writers'
    ])
  },
  methods: {
    saveWriter(writer) {
      this.addWriter({writer})
    },
    ...mapActions([
      'addWriter'
    ])
  }
}