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
            <button @click="openAddModal" class="btn primary">
              Add
              <i class="material-icons md-18">add_circle_outline</i>
            </button>
          </div>
        </div>
        <div class="content-block-body">
          <table class="table-bordered pure-table writers-table">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Rate Per Word</th>
              <th></th>
            </tr>
            <tr :key="writer.id" v-for="writer in writers">
              <td class="avatar-column">
                <user-avatar class="avatar" :user="writer"></user-avatar>
              </td>
              <td>{{ writer.name }}</td>
              <td>{{ writer.email }}</td>
              <td>{{ writer.rate_per_word }}</td>
              <td class="column-actions">
                <button class="btn primary" @click="editWriter(writer.id)">Update</button>
                <button class="btn danger" @click="deleteWriter(writer.id)">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <app-modal :hasFooter="false" @close="showModal = false" v-if="showModal">
      <writer-form :writer="modalData" @save="save"></writer-form>
    </app-modal>
  </section>
</template>

<script src="./Writers.js"></script>
<style src="./Writers.scss" lang="scss"></style>



