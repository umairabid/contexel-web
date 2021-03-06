import AppModal from "../../../../utils/AppModal";
import editorConfig from "../../../../helpers/editorConfig";
import CriteriaWidget from "../../../../utils/CriteriaWidget.vue";
import KeywordWidget from "../../../../utils/KeywordWidget.vue";
import { TaskSubmission } from "../../../../store/models/taskModels";
import { mapGetters, mapActions } from "vuex";
import Editor from "@tinymce/tinymce-vue";

export default {
  components: {
    "app-modal": AppModal,
    editor: Editor,
    "criteria-widget": CriteriaWidget,
    "keyword-widget": KeywordWidget
  },
  data() {
    const tasksState = this.$store.state.tasks;
    const taskSubmission = tasksState.currentTask.task_submissions.find(
      s => s.id == this.$route.params.submissionId
    );
    return {
      editorConfig: editorConfig("80%"),
      submission: taskSubmission || new TaskSubmission()
    };
  },
  computed: {
    ...mapGetters(["currentTask"]),
    title: function() {
      return `Submission of - ${this.currentTask.title}`;
    }
  },
  methods: {
    ...mapActions(["saveSubmission"]),
    close: function() {
      this.$router.push({
        name: "TaskSubmissions",
        params: { id: this.currentTask.id }
      });
    },
    save: function() {
      this.submission.task_id = this.currentTask.id;
      this.saveSubmission(this.submission);
    }
  }
};
