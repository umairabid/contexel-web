import AppModal from "../../../../utils/AppModal";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { mapGetters } from "vuex";

export default {
  components: {
    "app-modal": AppModal
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      }
    };
  },
  computed: {
    ...mapGetters(["currentTask"]),
    title: function() {
      return `Submission of - ${this.currentTask.title}`;
    }
  },
  methods: {
    close: function() {
      this.$router.push({
        name: "TaskSubmissions",
        params: { id: this.currentTask.id }
      });
    }
  }
};
