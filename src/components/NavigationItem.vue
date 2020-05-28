<template>
  <a class="navigation-item" :href="link">{{ text }}</a>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    text: String,
    link: String
  }
};
</script>

<style lang="scss" scoped>
.navigation-item {
  padding: 0;
  margin: 0;
  @include font-details(12px, 700, 'Helvetica');
  color: $text-color-light;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
