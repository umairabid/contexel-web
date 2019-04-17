<template>
  <section id="writers-screen" class="dashboard-screen">
      <header class="dashboard-screen-header">
        <h1>Manage Writers</h1>
      </header>
      <section class="dashboard-screen-section">
        <div class="writers-block content-block">
          <div class="content-block-head">
            <div class="content-block-title">Writers</div>
            <div class="content-block-actions">
              <button @click="showModal = true" class="btn primary">Add<i class="material-icons md-18">add_circle_outline</i></button>
            </div>
          </div>
          <div>
            <ul>
              <li v-for="writer in writers">{{ writer.name }}</li>
            </ul>
          </div>
        </div>
      </section>
      <app-modal :hasFooter="false" @close="showModal = false" v-if="showModal">
        <writer-form @save="saveWriter"></writer-form>
      </app-modal>
  </section>
</template>

<script src="./Writers.js"></script>
<style src="./Writers.scss" lang="scss"></style>



