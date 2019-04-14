<template>
    <section class="screen" id="home">
        <header>
            <div class="logo">Contexel</div>
            <nav v-if="user">
                <span>Hello {{ user.name }}</span>
            </nav>
            <nav v-if="!user">
                <router-link :to="{name: 'SignUp'}">Sign up</router-link>
                <router-link :to="{name: 'SignIn'}">Sign in</router-link>
            </nav>
        </header>
        <article>
            <div class="text-layer">
                <div class="title">Contexel</div>
                <p>The missing tool to manage anything related to content</p>
                <div v-if="!user" class="actions">
                    <router-link class="btn primary" :to="{name: 'SignUp'}">Sign up</router-link>
                    <router-link class="btn primary" :to="{name: 'SignIn'}">Sign in</router-link>
                </div>
                <div v-if="user" class="actions">
                    <router-link class="btn primary" :to="{name: 'Dashboard'}">Go To Dashboard</router-link>
                </div>
            </div>
        </article>
    </section>
</template>

<script src="./Home.js"></script>
<style scoped lang="scss" src="./Home.scss"></style>

