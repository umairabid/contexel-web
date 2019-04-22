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
    openAddModal() {
      this.modalData = {};
      this.showModal = true;
    },
    editTeam(id) {
      this.modalData = this.teams.find(t => t.id === id);
      this.showModal = true;
    },
    save(team) {
      this.saveTeam(team);
    },
    ...mapActions(["saveTeam", "getTeams", "deleteTeam"])
  }
};
