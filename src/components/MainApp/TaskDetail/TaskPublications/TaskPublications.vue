<template>
  <div id="task-publications-block" class="content-block">
    <div class="content-block-head">
      <div class="content-block-title">Task Publications</div>
      <div class="content-block-actions">
        <button @click="showModal = true" class="btn primary">
          Add
          <i class="material-icons md-18">add_circle_outline</i>
        </button>
      </div>
    </div>
    <div class="content-block-body">
      <div
        v-if="publications.length == 0"
        class="no-records total-center"
      >You do not have any publications.</div>
      <table v-if="publications.length > 0" class="table-bordered pure-table">
        <tr>
          <th>Published On</th>
          <th>Published At</th>
          <th>Link</th>
          <th></th>
        </tr>
        <tr :key="p.id" v-for="p in publications">
          <td>{{ p.created_at | moment }}</td>
          <td>{{ platforms[p.platform] }}</td>
          <td>
            <a :href="p.link">{{ p.link }}</a>
          </td>
          <td class="column-actions">
            <button class="btn danger" @click="remove(p.id)">Delete</button>
          </td>
        </tr>
      </table>
    </div>
    <app-modal title="Add Publication" v-if="showModal" @close="showModal = false">
      <add-publication @save="add" />
    </app-modal>
  </div>
</template>

<script src="./TaskPublications.js"></script>
<style lang="scss" src="./TaskPublications.scss"></style>

