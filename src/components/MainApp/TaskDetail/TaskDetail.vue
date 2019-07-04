<template>
  <section id="task-details-screen" class="dashboard-screen">
    <header class="dashboard-screen-header">
      <h1>{{ currentTask.title }}</h1>
    </header>
    <section class="dashboard-screen-section">
      <div class="content-block">
        <nav class="tabs">
          <router-link class="tab-item" :to="{name: 'TaskInfo', id: currentTask.id}">Task Info</router-link>
          <router-link
            class="tab-item"
            :to="{name: 'TaskSubmissions', id: currentTask.id}"
          >Submissions</router-link>
          <router-link class="tab-item" :to="{name: 'TaskComments', id: currentTask.id}">Comments</router-link>
          <router-link
            class="tab-item"
            :to="{name: 'TaskPublications', id: currentTask.id}"
          >Publications</router-link>
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


