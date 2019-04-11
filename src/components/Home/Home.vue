<template>
    <section class="screen" id="home">
        <header>
            <div class="logo">Contexel</div>
            <nav>
                <router-link :to="{name: 'signup'}">Sign up</router-link>
                <a>Sign in</a>
            </nav>
        </header>
        <article>
            <div class="text-layer">
                <div class="title">Contexel</div>
                <p>The missing tool to manage anything related to content</p>
                <div class="actions">
                    <button class="btn primary">Sign Up</button>
                    <button class="btn primary">Sign In</button>
                </div>
            </div>
        </article>
    </section>
</template>

<script src="./Home.js"></script>
<style scoped lang="scss" src="./Home.scss"></style>

