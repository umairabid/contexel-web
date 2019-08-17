import AppModal from "../../../utils/AppModal";
import GenerateInvoice from "./GenerateInvoice";
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import { apiUrl } from "../../../utils/apiClient";
import { getUser } from "../../../utils/storage";

export default {
  components: {
    AppModal,
    GenerateInvoice
  },
  created() {
    this.getInvoices();
  },
  data() {
    return {
      showModal: false,
      user: getUser(),
      apiUrl
    };
  },
  computed: {
    ...mapGetters(["invoices"])
  },
  methods: {
    ...mapActions(["saveInvoice", "getInvoices"]),
    save: function(data) {
      this.saveInvoice(data);
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
