<template>
  <section class="screen" id="sign-up">
    <div class="sign-up-form-holder">
      <div class="logo">Contexel</div>
      <form class="sign-up-form">
        <div :class="{error: hasError('name')}" class="form-control">
          <label>Enter Your Name</label>
          <input placeholder="e.g. John Doe" type="text" v-model="name">
          <small v-bind:key="index" v-for="(error, index) in errors.name">{{ error }}</small>
        </div>

        <div :class="{error: hasError('email')}" class="form-control">
          <label>Enter Your Email Address</label>
          <input placeholder="e.g. johnd@gmail.com" type="text" v-model="email">
          <small v-bind:key="index" v-for="(error, index) in errors.email">{{ error }}</small>
        </div>

        <div :class="{error: hasError('password')}" class="form-control">
          <label>Enter Your Password</label>
          <input type="password" v-model="password">
          <small v-bind:key="index" v-for="(error, index) in errors.password">{{ error }}</small>
        </div>

        <button @click="register" class="btn primary">Sign Up</button>
      </form>
    </div>
  </section>
</template>

<script src="./SignUp.js"></script>
<style src="./SignUp.scss" scoped lang="scss"></style>
