<template>
  <main class="setup">
    <h3>Installation</h3>
    <ol>
      <li>
        <h4>
          <strong>Using Webpack, Rollup, etc...</strong>
        </h4>
        <p>Install using npm or yarn</p>
        <p>NPM</p>
        <p>
          <code>npm install vue-waves-effect --save</code>
        </p>
        <p>Yarn</p>
        <p>
          <code>yarn add vue-waves-effect</code>
        </p>

        <p>in your main JavaScript file</p>
        <pre>
        <code>
    // src/main.js

    import Vue from 'vue';
    import Waves from 'vue-waves-effect';
    import 'vue-waves-effect/dist/vueWavesEffect.css';

    Vue.use(Waves);
        </code>
    </pre>
      </li>

      <li>
        <h4>
          <strong>Using script tag</strong>
        </h4>
        <pre>
            <code>
    &lt;!doctype html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;title&gt;Vue Waves Effect&lt;/title&gt;
        &lt;link rel="stylesheet" href="https://unpkg.com/vue-waves-effect/dist/vueWavesEffect.css" /&gt;
        &lt;script src="https://cdn.jsdelivr.net/npm/vue">&lt;/script>
        &lt;script src="https://unpkg.com/vue-waves-effect/dist/vueWavesEffect.min.js"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
    &lt;div id="app"&gt;
        &lt;p v-waves.button.float&gt;Click to see the effect&lt;/p&gt;
    &lt;/div&gt;
        &lt;script&gt;
          Vue.use(vueWavesEffect);
          var app = new Vue({
              el: '#app'
            })
        &lt;/script&gt;
    &lt;/body&gt;
    &lt;/html&gt;

            </code>
        </pre>
      </li>
    </ol>

    <h3>Development</h3>

    <p>
      In case you want to work on a fork of this project you will need to install
      <code>Vue CLI</code>
    </p>

    <h5>NPM</h5>
    <p>
      <code>sudo npm install -g @vue/cli</code>
    </p>
    <p>
      <code>sudo npm install -g @vue/cli-service-global</code>
    </p>

    <h5>Yarn</h5>
    <p>
      <code>sudo yarn global add @vue/cli</code>
    </p>
    <p style="margin-bottom: 30px;">
      <code>sudo yarn global add @vue/cli-service-global</code>
    </p>
  </main>
</template>
