import AppModal from "../../../utils/AppModal";
import ConnectWordpress from "./ConnectWordpress";
import { mapGetters, mapActions } from "vuex";
import { keyBy } from "../../../helpers/functions";

const platforms = ["wordpress", "facebook", "twitter"];
const platformLabels = {
  wordpress: "Wordpress",
  facebook: "Facebook",
  twitter: "Twitter"
};

export default {
  components: {
    "app-modal": AppModal,
    "connect-wordpress": ConnectWordpress
  },
  created() {
    this.getPlatforms();
  },
  methods: {
    connect(name) {
      if (!this[`${name}Connect`]) {
        console.error("Method not implemented");
        return;
      }
      this[`${name}Connect`]();
    },
    disconnect(id) {
      this.removePlatform(id).then(this.getPlatforms);
    },
    wordpressConnect() {
      this.showModal = true;
    },
    connectWithWordpress(data) {
      data["type"] = "wordpress";
      this.savePlatform(data).then(res => {
        this.showModal = false;
        this.getPlatforms();
      });
    },
    ...mapActions(["getPlatforms", "removePlatform", "savePlatform"])
  },
  computed: {
    ...mapGetters(["platforms"]),
    displayablePlatforms() {
      const connectedPlatforms = keyBy(this.platforms, "name");
      return platforms.map(p => ({
        id: connectedPlatforms[p] ? connectedPlatforms[p].id : null,
        name: p,
        label: platformLabels[p],
        isConnected: Boolean(connectedPlatforms[p])
      }));
    }
  },
  data() {
    return {
      showModal: false
    };
  }
};
