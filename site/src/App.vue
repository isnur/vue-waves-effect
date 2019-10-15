<style lang="sass" src="./assets/sass/common.sass"></style>

<template>
  <div id="app">
    <header v-waves>
      <a class="menu-handle" @click="toggleMenu"></a>
      <img v-waves:hover.circle.float class="logo" alt="Vue logo" src="@/assets/img/logo.svg" />
      <div class="title">
        <h1 v-waves.shake>Vue Waves Effect</h1>
        <p class="small">Hint: click logo or header background</p>
      </div>
    </header>
    <div class="content">
      <aside-menu :hide="menuHide"></aside-menu>
      <router-view class="main-content" />
    </div>
  </div>
</template>

<script>
import AsideMenu from "@/components/menu.vue";

export default {
  name: "home",
  data() {
    return {
      menuHide: true
    };
  },
  components: {
    AsideMenu
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.menuHide = true;
      next();
    });
  },
  methods: {
    toggleMenu() {
      this.menuHide = !this.menuHide;
    }
  }
};
</script>

