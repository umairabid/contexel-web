<template>
  <div class="content-block">
    <h4>Keyword Denisties</h4>
    <table>
      <tr>
        <th></th>
        <th>Required</th>
        <th>Current</th>
      </tr>
      <tr :key="index" v-for="(keyword, index) in keywords">
        <td>{{keyword.name}}</td>
        <td>{{keyword.density}}</td>
        <td>{{keyword.percentage}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { stripHtmlTags } from "../helpers/functions";

export default {
  props: ["task", "content"],
  computed: {
    keywords: function() {
      const contentCount = stripHtmlTags(this.content).split(" ").length;
      return this.task.keywords.map(k => {
        const keyword = k.name.toLowerCase();
        const pattern = new RegExp(`${keyword}`, "gi");
        const matches = this.content.match(pattern);
        const count = matches ? matches.length : 0;
        return {
          name: k.name,
          density: k.density,
          percentage: Math.ceil((count / contentCount) * 100)
        };
      });
    }
  }
};
</script>

<style lang="scss">
</style>



