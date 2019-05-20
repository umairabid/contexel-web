import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(["currentTask"])
  },
  methods: {}
};
