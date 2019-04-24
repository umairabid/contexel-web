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
      </div>
    </article>
    <app-modal title="Add Task" @close="showModal = false" v-if="showModal">
      <task-form :writers="writers"></task-form>
    </app-modal>
  </section>
</template>

<script src="./Tasks.js"></script>
<style src="./Tasks.scss" lang="scss"></style>

