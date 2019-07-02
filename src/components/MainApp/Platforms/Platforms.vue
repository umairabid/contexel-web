<template>
  <section id="platforms-screen" class="dashboard-screen">
    <header class="dashboard-screen-header">
      <h1>Manage Platforms</h1>
    </header>
    <article class="dashboard-screen-section">
      <div class="content-block">
        <div class="platforms">
          <div :key="platform.name" v-for="platform in displayablePlatforms" class="platform">
            <img :src="'/social/' + platform.name  + '.png'" />
            <span v-if="!platform.isConnected">You are not connected with {{ platform.label }}</span>
            <button
              v-if="!platform.isConnected"
              @click="connect(platform.name)"
              class="btn primary"
            >Connect</button>
            <span v-if="platform.isConnected">You are connected with {{ platform.label }}</span>
            <button
              v-if="platform.isConnected"
              @click="disconnect(platform.id)"
              class="btn danger"
            >Disconnect</button>
          </div>
        </div>
      </div>
    </article>
    <app-modal title="Connect With Wordpress" @close="showModal = false" v-if="showModal">
      <connect-wordpress @save="connectWithWordpress" />
    </app-modal>
  </section>
</template>
<script src="./Platforms.js"></script>
<style lang="scss" src="./Platforms.scss"></style>