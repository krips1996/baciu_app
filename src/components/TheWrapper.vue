<template>
  <div class="wrapper">
    <the-header />
    <the-content />
  </div>
</template>

<script>
import TheHeader from './TheHeader.vue';
import TheContent from './TheContent.vue';

export default {
  name: 'TheWrapper',
  components: {
    TheHeader,
    TheContent
  }
};
</script>

<style lang="scss" scoped></style>
