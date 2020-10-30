<template>
  <menu class="aside-menu" :class="{hidden: hide}">
    <div class="lists">
      <ul class="main-list">
        <li>
          <a v-waves:hover.block href="https://github.com/isnur/vue-waves-effect" class="github-logo">
            <span class="label">Github</span>
          </a>
        </li>
        <li v-waves:hover.block>
          <router-link to="/">Getting Started</router-link>
        </li>
        <li v-waves:hover.block>
          <router-link to="/setup">Setup</router-link>
        </li>
        <li v-waves:hover.block>
          <router-link to="/usage">Usage</router-link>
        </li>
      </ul>
    </div>

    <footer class="footer">
      <p>
        &copy;
        <span v-text="year"></span> Isnur MSM
        <br />All rights reserved
      </p>
    </footer>
  </menu>
</template>

<script>
export default {
  name: "aside-menu",
  props: ["hide"],
  computed: {
    dev() {
      return process.env.NODE_ENV === "development";
    },
    year() {
      const d = new Date();
      return d.getUTCFullYear();
    }
  },
  methods: {
    mouseover() {
        window.vueWavesEffect.ripple(this, { wait: null });
    }
  }
};
</script>
