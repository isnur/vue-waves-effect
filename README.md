# vue-waves-effect

Waves effect directive for Vue. Based on [Waves](https://github.com/fians/Waves).

## Documentation & Demo

[https://v-waves.isnur.com/](https://v-waves.isnur.com/)

## Installation

```bash
 npm install vue-waves-effect --save
```

## Usage

Import the plugin and add it to Vue.

```vue
  // src/main.js

  import Vue from 'vue';
  import Waves from 'vue-waves-effect';
  import 'vue-waves-effect/dist/vueWavesEffect.css';

  Vue.use(Waves);
```

Then use on any element in the template.

```vue
<template>
  <button v-waves></button>
</template>
```

## Modifiers

[Waves](https://github.com/fians/Waves) provide several classes to help you styling your effect.

- `.waves-button` for semi-rounded button style.
- `.waves-float` for float effect when the element is clicked.
- `.waves-circle` for circle (rounded) style.
- `.waves-block` for adding display: block; to element.

To use helper classes just pass modifiers to the directive:

```vue
<button v-waves.button></button>
<button v-waves.button.float></button>
<button v-waves.button.light></button>

<span v-waves.circle></span>
<span v-waves.circle.float></span>
<span v-waves.circle.light></span>

<div v-waves.block></div>
<div v-waves.block.float></div>
```

## Config

You can also configure Waves by passing option parameter.

```vue
Vue.use(Waves, {
    duration: 500,
    delay: 200
});
```

## Builds

If you don't use a package manager, you can [access `vue-waves-effect` via unpkg (CDN)](https://unpkg.com/vue-waves-effect/), download the source, or point your package manager to the url.

The `vue-waves-effect` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/vue-waves-effect/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/vue-waves-effect) on your page. The UMD builds make `vue-waves-effect` available as a `window.vueWavesEffect` global variable.

## License

The code is available under the [MIT](LICENSE) license.

## Contributing

We are open to contributions, see [CONTRIBUTING.md](CONTRIBUTING.md) for more info.
