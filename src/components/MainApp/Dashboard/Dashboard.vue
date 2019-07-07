<template>
  <section class="dashboard-screen" id="dashboard">
    <header class="dashboard-screen-header">
      <h1>Welcome, {{ user.name }}</h1>
    </header>
    <article class="dashboard-screen-section">
      <div class="content-block">
        <div class="content-block-head">
          <div class="content-block-title">Summary</div>
        </div>
        <div class="content-block-body">
          <div :key="name" v-for="(value, name) in summary" class="stat-container">
            <div class="value total-center">{{ value }}</div>
            <div class="label total-center">{{ name }}</div>
          </div>
        </div>
      </div>

      <div class="content-block">
        <div class="content-block-head">
          <div class="content-block-title">Tasks</div>
        </div>
        <div class="content-block-body">
          <div :key="name" v-for="(value, name) in tasks" class="stat-container">
            <div class="value total-center">{{ value }}</div>
            <div class="label total-center">{{ statuses[name] }}</div>
          </div>
        </div>
      </div>

      <div v-if="user.role == 'manager'" class="content-block">
        <div class="content-block-head">
          <div class="content-block-title">Tasks assigned to Writers</div>
        </div>
        <div class="content-block-body">
          <div :key="name" v-for="(value, name) in writers" class="stat-container">
            <div class="value total-center">{{ value }}</div>
            <div class="label total-center">{{ name }}</div>
          </div>
        </div>
      </div>

      <div v-if="user.role == 'manager'" class="content-block">
        <div class="content-block-head">
          <div class="content-block-title">Writers in Teams</div>
        </div>
        <div class="content-block-body">
          <div :key="name" v-for="(value, name) in teams" class="stat-container">
            <div class="value total-center">{{ value }}</div>
            <div class="label total-center">{{ name }}</div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script src="./Dashboard.js"></script>
<style lang="scss" src="./Dashboard.scss"></style>