<template>
  <app-modal :title="title" @close="close" class="task-submission-modal">
    <section id="task-submission-screen">
      <article class="submission-panel content-block">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </article>
      <aside class="submission-panel">
        <div class="content-block">
          <h4>Crtieria Fulfilment</h4>
          <table>
            <tr>
              <th></th>
              <th>Required</th>
              <th>Current</th>
            </tr>
            <tr>
              <td>Mistakes</td>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Plagarism</td>
              <td>10</td>
              <td>0</td>
            </tr>
          </table>
        </div>
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
      <footer>
        <button @click="close" class="btn danger">Close</button>
        <button class="btn primary">Save</button>
      </footer>
    </section>
  </app-modal>
</template>

<script src="./TaskSubmission.js"></script>
<style lang="scss" src="./TaskSubmission.scss"></style>