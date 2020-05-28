<template>
  <div id="app">
    <the-wrapper />
  </div>
</template>

<script>
import TheWrapper from './components/TheWrapper.vue';

export default {
  name: 'App',
  components: {
    TheWrapper
  }
};
</script>

<style>
body {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-image: url('./assets/images/background.svg');
}
</style>
