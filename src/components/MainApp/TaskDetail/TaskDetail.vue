<template>
  <section id="task-details-screen" class="dashboard-screen">
    <header class="dashboard-screen-header">
      <h1>{{ currentTask.title }}</h1>
    </header>
    <section class="dashboard-screen-section">
      <div class="content-block">
        <nav class="tabs">
          <div class="tab-item active">Task Info</div>
          <div class="tab-item">Submissions</div>
          <div class="tab-item">Comments</div>
          <div class="tab-item">Publications</div>
        </nav>
      </div>
      <div class="content-block tab-content">
        <router-view v-if="currentTask.id"></router-view>
      </div>
    </section>
  </section>
</template>

<script src="./TaskDetail.js"></script>
<style lang="scss" src="./TaskDetail.scss"></style>


