<template>
  <section class="screen" id="dashboard">
    <aside>
      <div class="user-card">
        <div class="logo">Contexel</div>
        <p class="name">{{ user.name }}</p>
        <p class="email">{{ user.email }}</p>
        <entity-avatar class="avatar" :entity="user"></entity-avatar>
      </div>
      <ul class="dashboard-nav">
        <li v-bind:key="link.name" v-for="link in nav">
          <router-link :to="{name: link.name}" class="nav-link">
            <i class="material-icons md-18">{{ link.icon }}</i>
            <span class="link-label">{{ link.label }}</span>
          </router-link>
        </li>
      </ul>
    </aside>
    <header class="main-app-header">
      <div class="right">
        <span>
          Hello {{ user.name }}!
          <a class="logout-link" @click="logout">Logout</a>
        </span>
      </div>
    </header>
    <router-view></router-view>
  </section>
</template>

<script src="./MainApp.js"></script>
<style src="./MainApp.scss" lang="scss"></style>
