<template>
  <div id="criteria-widget" class="content-block">
    <h4>
      Crtieria Fulfilment
      <i @click="loadCriteria" class="material-icons">refresh</i>
    </h4>
    <table>
      <tr>
        <th></th>
        <th>Required</th>
        <th>Current</th>
      </tr>
      <tr>
        <td>Mistakes</td>
        <td>{{ task.max_mistakes }}</td>
        <td>{{ this.mistakes }}</td>
      </tr>
      <tr>
        <td>Plagarism</td>
        <td>{{ task.max_plagiarism }}</td>
        <td>{{ this.plagarism }}</td>
      </tr>
      <tr>
        <td>Required Words</td>
        <td>{{ task.min_word }}</td>
        <td>{{ this.count }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import apiClient from "./apiClient";
import { stripHtmlTags } from "../helpers/functions";

export default {
  props: ["content", "task"],
  created() {
    this.loadCriteria();
  },
  data() {
    return {
      mistakes: 0,
      plagarism: 0,
      count: 0
    };
  },
  methods: {
    loadCriteria: function() {
      if (!this.content || !this.content.length > 0) return;
      apiClient("POST", "/stats", { html: this.content }).then(res => {
        this.mistakes = res.mistakes.results.error.length;
        this.plagarism = res.plagarism.plagPercent;
        this.count = stripHtmlTags(this.content).split(" ").length;
      });
    }
  }
};
</script>

<style lang="scss">
#criteria-widget {
  h4 {
    display: flex;
    align-items: center;
  }
}
</style>
