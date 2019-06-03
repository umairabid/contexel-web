<template>
  <div id="task-info">
    <task-form @save="save" :task="currentTask"/>
  </div>
</template>

<script src="./TaskInfo.js"></script>
<style lang="scss" src="./TaskInfo.scss"></style>
