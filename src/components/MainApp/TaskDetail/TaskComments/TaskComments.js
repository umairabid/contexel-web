import Editor from "@tinymce/tinymce-vue";
import editorConfig from "../../../../helpers/editorConfig";
import { TaskComment as TaskCommentModel } from "../../../../store/models/taskModels";
import TaskComment from "./TaskComment.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    editor: Editor,
    "task-comment": TaskComment
  },
  created() {
    this.getComments(this.currentTask.id);
  },
  data() {
    return {
      editorConfig: editorConfig("200px"),
      newComment: new TaskCommentModel()
    };
  },
  methods: {
    addNewComment: function() {
      if (!this.newComment.comment) return;
      this.newComment.task_id = this.currentTask.id;
      this.saveComment(this.newComment);
    },
    ...mapActions(["saveComment", "getComments"])
  },
  computed: {
    ...mapGetters(["currentTask"])
  }
};
