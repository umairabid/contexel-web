import AppModal from "../../../utils/AppModal.vue";
import TeamForm from "../../forms/TeamForm.vue";
import EntityAvatar from "../../../utils/EntityAvatar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    "app-modal": AppModal,
    "team-form": TeamForm,
    "entity-avatar": EntityAvatar
  },
  created() {
    this.getTeams();
  },
  data() {
    return {
      showModal: false,
      modalData: {}
    };
  },
  computed: {
    ...mapGetters(["teams"])
  },
  methods: {
    openModal(team) {
      this.modalData = team || {};
      this.showModal = true;
    },
    save(team) {
      this.saveTeam(team)
        .then(() => (this.showModal = false))
        .catch(err => console.log(err));
    },
    ...mapActions(["saveTeam", "getTeams", "deleteTeam"])
  }
};
