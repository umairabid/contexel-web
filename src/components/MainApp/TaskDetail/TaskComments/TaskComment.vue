<template>
  <div :class="{'current-user-comment': isCurrentUser}" class="task-comment-container">
    <div v-if="!editableComment" v-html="comment.comment" class="task-comment"></div>
    <editor
      v-if="editableComment"
      v-model="editableComment"
      :init="editorConfig"
      api-key="440bb73tq6dkx1ncdu2ejhonylaxqty3m5p7f7rqqyv3fa3c"
    ></editor>
    <div v-if="!editableComment" class="task-comment-info">
      <span>By&nbsp;</span>
      <strong>{{ comment.user.name }}</strong>
      <span>&nbsp;on&nbsp;</span>
      <strong>{{ comment.created_at | moment }}</strong>
      <button @click="setEditableComment" v-if="isCurrentUser" class="btn btn-link">Edit</button>
      <button @click="remove" v-if="isCurrentUser" class="btn btn-link">Delete</button>
    </div>
    <button @click="save" v-if="editableComment" class="btn primary">Save Comment</button>
  </div>
</template>

<script>
import { getUser } from "../../../../utils/storage";
import Editor from "@tinymce/tinymce-vue";
import moment from "moment";
import editorConfig from "../../../../helpers/editorConfig";
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["comment"],
  components: {
    editor: Editor
  },
  data() {
    return {
      user: getUser(),
      editableComment: null,
      editorConfig: editorConfig("200px")
    };
  },
  computed: {
    isCurrentUser() {
      return this.user.id === this.comment.user.id;
    },
    ...mapGetters(["currentTask"])
  },
  methods: {
    setEditableComment: function() {
      this.editableComment = this.comment.comment;
    },
    save: function() {
      this.comment.comment = this.editableComment;
      this.comment.task_id = this.currentTask.id;
      this.saveComment(this.comment).then(res => (this.editableComment = null));
    },
    remove: function() {
      this.comment.task_id = this.currentTask.id;
      this.removeComment(this.comment);
    },
    ...mapActions(["saveComment", "removeComment"])
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY");
    }
  }
};
</script>

<style lang="scss">
.task-comment-container {
  width: 100%;
  margin: $ver_space 0;
  display: flex;
  flex-direction: column;
  .task-comment {
    width: 80%;
    border: 1px solid $border_color;
    border-radius: $std_border;
    background-color: $color_lighten_5;
    padding: $ver_space $hor_space;
  }
  .task-comment-info {
    margin-top: $ver_space;
    margin-left: $hor_space;
    .btn-link {
      display: inline;
      height: auto;
      min-width: auto;
    }
  }
  .editable-info {
    margin-top: $ver_space;
  }
  &.current-user-comment {
    align-items: flex-end;
    .task-comment {
      background-color: $color_lighten_4;
    }
  }
  .btn.primary {
    margin-top: $ver_space;
  }
}
</style>
