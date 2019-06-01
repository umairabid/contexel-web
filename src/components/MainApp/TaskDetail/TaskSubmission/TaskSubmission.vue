<template>
  <app-modal :title="title" @close="close" class="task-submission-modal">
    <section id="task-submission-screen">
      <article class="submission-panel content-block">
        <editor
          v-model="submission.submission"
          :init="editorConfig"
          api-key="440bb73tq6dkx1ncdu2ejhonylaxqty3m5p7f7rqqyv3fa3c"
        ></editor>
      </article>
      <aside class="submission-panel">
        <criteria-widget :task="currentTask" :content="submission.submission"/>
        <div class="content-block">
          <h4>Keyword Denisties</h4>
          <table>
            <tr>
              <th></th>
              <th>Required</th>
              <th>Current</th>
            </tr>
            <tr>
              <td>Keyword One</td>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Keyword Two</td>
              <td>10</td>
              <td>0</td>
            </tr>
          </table>
        </div>
      </aside>
    </section>
    <footer>
      <button @click="close" class="btn danger">Close</button>
      <button @click="save" class="btn primary">Save</button>
    </footer>
  </app-modal>
</template>

<script src="./TaskSubmission.js"></script>
<style lang="scss" src="./TaskSubmission.scss"></style>