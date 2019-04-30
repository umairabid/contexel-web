<template>
  <section id="teams-screen" class="dashboard-screen">
    <header class="dashboard-screen-header">
      <h1>Manage Teams</h1>
    </header>
    <section class="dashboard-screen-section">
      <div class="writers-block content-block">
        <div class="content-block-head">
          <div class="content-block-title">Teams</div>
          <div class="content-block-actions">
            <button @click="openModal()" class="btn primary">
              Add
              <i class="material-icons md-18">add_circle_outline</i>
            </button>
          </div>
        </div>
        <div class="content-block-body">
          <table class="table-bordered pure-table">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Description</th>
              <th></th>
            </tr>
            <tr :key="team.id" v-for="team in teams">
              <td class="avatar-column">
                <entity-avatar class="avatar" :entity="team"></entity-avatar>
              </td>
              <td>{{ team.name }}</td>
              <td>{{ team.description }}</td>
              <td class="column-actions">
                <button class="btn primary" @click="openModal(team)">Update</button>
                <button class="btn danger" @click="deleteTeam(team.id)">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <app-modal @close="showModal = false" v-if="showModal">
      <team-form :team="modalData" @save="save"></team-form>
    </app-modal>
  </section>
</template>

<script src="./Teams.js"></script>
<style src="./Teams.scss" lang="scss"></style>
