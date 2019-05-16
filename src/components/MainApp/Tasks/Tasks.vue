<template>
  <section id="tasks-screen" class="dashboard-screen">
    <header class="dashboard-screen-header">
      <h1>Manage Tasks</h1>
    </header>
    <article class="dashboard-screen-section">
      <div class="writers-block content-block">
        <div class="content-block-head">
          <div class="content-block-title">Tasks</div>
          <div class="content-block-actions">
            <button @click="openModal()" class="btn primary">
              Add
              <i class="material-icons md-18">add_circle_outline</i>
            </button>
          </div>
        </div>
        <div class="content-block-body tasks-list-view">
          <router-link
            :to="{ name: 'TaskInfo', params: { id: task.id }}"
            :key="task.id"
            v-for="task in tasks"
            class="task-list-item"
          >
            <user-avatar class="avatar" :user="task.assignee"></user-avatar>
            <div class="task-name">{{ task.title }}</div>
            <div class="task-cell">{{ task.status_label }}</div>
            <div class="task-cell">{{ task.due_date | moment }}</div>
          </router-link>
        </div>
      </div>
    </article>
    <app-modal title="Add Task" @close="showModal = false" v-if="showModal">
      <task-form :task="modalData" @save="save"></task-form>
    </app-modal>
  </section>
</template>

<script src="./Tasks.js"></script>
<style src="./Tasks.scss" lang="scss"></style>

