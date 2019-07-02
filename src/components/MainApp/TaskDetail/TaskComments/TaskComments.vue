<template>
  <div id="task-comments">
    <h2>Task Comments</h2>
    <task-comment
      :comment="comment"
      :key="comment.id"
      v-for="comment in currentTask.task_comments"
    />
    <br>
    <br>
    <div class="comment-editor">
      <editor
        v-model="newComment.comment"
        :init="editorConfig"
        api-key="440bb73tq6dkx1ncdu2ejhonylaxqty3m5p7f7rqqyv3fa3c"
      ></editor>
      <button v-if="newComment.comment" @click="addNewComment" class="btn primary">Add New Comment</button>
    </div>
  </div>
</template>

<script src="./TaskComments.js"></script>
<style lang="scss" src="./TaskComments.scss"></style>